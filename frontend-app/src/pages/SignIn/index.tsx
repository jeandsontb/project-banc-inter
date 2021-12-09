import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import { Background, ButtonContainer, InputContainer, Wrapper } from './styles';
import background from '../../assets/banner.png';
import logoInter from '../../assets/logo.png';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const navigate = useNavigate();
  const { userSignIn } = useAuth();

  const handleToSignIn = async () => {

    const data = {
      email,
      password
    }

    const response = await userSignIn(data);

    if(response.id) {
      navigate('/dashboard');
      return;
    }

    alert('Usuário ou senha inválida');
  }

  return (
    <Wrapper>
      <Background image={background}/>
        <Card width="403px">
          <img src={logoInter} alt="logo inter" width={172} height={61} />

          <InputContainer>
            <Input 
              placeholder="EMAIL" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
            />
            <Input 
              placeholder="SENHA" 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </InputContainer>

          <ButtonContainer>
            <Button type="button" onClick={handleToSignIn}>
              Entrar
            </Button>

            <p>Ainda não é cadastrado? <Link to="/signup" >Cadastre-se já!</Link></p>
          </ButtonContainer>
        </Card>
    </Wrapper>
  );
}

export default SignIn;