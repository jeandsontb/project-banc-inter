
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import { HeaderContainer, HeaderWrapper, UserInfo } from './styles';
import logoInter from '../../assets/logo.png';
import UserCircle from '../UserCicle';

const Header = () => {

  const navigate = useNavigate();
  const { user } = useAuth();
  const initials = user.firstName.substr(0, 1)+user.lastName.substr(0, 1).toUpperCase();

  const handleLogoff = () => {
    navigate('/');
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logoInter} alt="logo inter" width={172} height={61} />

        <UserInfo >
          <UserCircle initials={initials}/>
          <div>
            <p>
              Olá.
              {' '}  
              <span className="primary-color font-bold">
                {user.firstName} {user.lastName} 
              </span> 
            </p>
            <strong>{user.accountNumber}-{user.accountDigit}</strong><br />
            {/* eslint-disable-next-line */}
            <a href="#"  onClick={handleLogoff} >Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header;