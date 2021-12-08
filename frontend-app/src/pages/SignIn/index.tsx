import React from 'react';
import { Background, ButtonContainer, InputContainer, Wrapper } from './styles';

import background from '../../assets/banner.png';
import logoInter from '../../assets/logo.png';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {

  const navigate = useNavigate();

  const handleToSignIn = () => {
    navigate('/dashboard');
  }

  return (
    <Wrapper>
      <Background image={background}/>
        <Card width="403px">
          <img src={logoInter} alt="logo inter" width={172} height={61} />

          <InputContainer>
            <Input placeholder="EMAIL"/>
            <Input placeholder="SENHA" type="password"/>
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