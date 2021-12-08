import Button from '../../components/Button';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Statement from './Statement';
import { BodyContainer, DashboardBackground, InLineContainer, InLineTitle } from './styles';

const Dashboard = () => {

  const wallet = 5000;

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
              <Input style={{flex: 1}} placeholder="Valor" />
              <Button>Gerar Código</Button>
            </InLineContainer>

            <p className="primary-color">Pix copia e cola</p>
            <p className="primary-color">sdfj2323OJOJLK2232323LKJL</p>
          </Card>

          <Card noShadow width="90%">
            <InLineTitle>
              <h2 className="h2">
                Pagar PIX
              </h2>
            </InLineTitle>

            <InLineContainer>
              <Input style={{flex: 1}} placeholder="Insira a chave" />
              <Button>Pagar Pix</Button>
            </InLineContainer>
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