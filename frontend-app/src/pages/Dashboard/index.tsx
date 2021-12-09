import { useEffect, useState } from 'react';

import useAuth from '../../hooks/useAuth';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Statement from './Statement';
import { BodyContainer, DashboardBackground, InLineContainer, InLineTitle } from './styles';
import { pay, request } from '../../services/resources/pix';


const Dashboard = () => {

  const { user, getCurrentUser } = useAuth();
  const wallet = user?.wallet || 0;

  const [ key, setKey ] = useState('');
  const [ generatedKey, setGeneratedKey ] = useState('');
  const [ messagePayment, setMessagePayment ] = useState('');
  const [ value, setValue ] = useState('');

  useEffect(() => {
    getCurrentUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(!user) {
    return null;
  }

  const handleNewPayment = async () => {
    const {data} = await request(Number(value));

    if(data.copyPasteKey) {
      setGeneratedKey(data.copyPasteKey);
    }
  }

  const handlePayPix = async () => {
    try {
      const { data } = await pay(key);

      if(data.msg) {
        setMessagePayment('Pagamento Realizado.');
        return;
      }

      return setMessagePayment('Não foi possível realizar o pagamento');
    } catch (e) {
      console.log(e);
      setMessagePayment('Não foi possível realizar o pagamento');
    }
  }
 
  return (
    <DashboardBackground>        
      <Header />

      <BodyContainer>
        <div>
          <Card noShadow width="90%">
            <InLineTitle>
              <h2 className="h2">
                Saldo Atual
              </h2>
            </InLineTitle>

            <InLineContainer>
              <h3 className="wallet" >
                {wallet.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}
              </h3>
            </InLineContainer>
          </Card>

          <Card noShadow width="90%">
            <InLineTitle>
              <h2 className="h2">
                Receber PIX
              </h2>
            </InLineTitle>

            <InLineContainer>
              <Input 
                style={{flex: 1}} 
                placeholder="Valor" 
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button onClick={handleNewPayment}>Gerar Código</Button>
            </InLineContainer>

            {generatedKey &&
              <>
                <p className="primary-color">Pix copia e cola</p>
                <p className="primary-color">{generatedKey}</p>
              </>
            }
          </Card>

          <Card noShadow width="90%">
            <InLineTitle>
              <h2 className="h2">
                Pagar PIX
              </h2>
            </InLineTitle>

            <InLineContainer>
              <Input 
                style={{flex: 1}} 
                placeholder="Insira a chave" 
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
              <Button onClick={handlePayPix} >Pagar Pix</Button>
            </InLineContainer>
            {messagePayment && 
              <p className="primary-color">{messagePayment}</p>
            }
          </Card>
        </div>

        <div>
          <Card noShadow width="90%">
            <InLineTitle>
              <h2 className="h2">
                Extrato da conta
              </h2>
            </InLineTitle>

            <Statement />
          </Card>
        </div>
      </BodyContainer>
    </DashboardBackground>
  );
}

export default Dashboard;