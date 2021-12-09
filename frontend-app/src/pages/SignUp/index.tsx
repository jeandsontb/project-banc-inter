
import { Background, ButtonContainer, InputContainer, Wrapper } from './styles';

import background from '../../assets/banner.png';
import logoInter from '../../assets/logo.png';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {

  const navigate = useNavigate();
  const { userSignUp } = useAuth();

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirm, setPasswordConfirm ] = useState('');
  const [ message, setMessage ] = useState('');

  const handleToSignUp = async () => {

    if(firstName && lastName && email && password && passwordConfirm) {

      setMessage('')

      const data = {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm
      }
  
      if(password === passwordConfirm) {
        
        const response = await userSignUp(data);
    
        if(response.id) {
          navigate('/dashboard');
          return;
        }
      }
    } else {

    setMessage('Todos os campos são obrigatórios.');
    }
  }

  return (
    <Wrapper>
      <Background image={background}/>
        <Card width="403px">
          <img src={logoInter} alt="logo inter" width={172} height={61} />

          <InputContainer>          
            <Input 
              placeholder="NOME"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}  
              required
            />
            <Input 
              placeholder="SOBRENOME"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
            <Input 
              placeholder="EMAIL"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input 
              placeholder="SENHA" 
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <Input 
              placeholder="CONFIRMAR SENHA" 
              type="password"
              value={passwordConfirm}
              onChange={e => setPasswordConfirm(e.target.value)}
              required
            />

            {message.length > 0 && <p className="primary-color" >{message}</p>}
          </InputContainer>

          <ButtonContainer>
            <Button type="button" onClick={handleToSignUp}>
              Entrar
            </Button>

            <p>Já tem uma conta? <Link to="/" >Entre já!</Link></p>
          </ButtonContainer>
        </Card>
    </Wrapper>
  );
}

export default SignUp;