
import { useNavigate } from 'react-router-dom';

import { HeaderContainer, HeaderWrapper, UserInfo } from './styles';
import logoInter from '../../assets/logo.png';
import UserCircle from '../UserCicle';

const Header = () => {

  const navigate = useNavigate();

  const handleLogoff = () => {
    navigate('/');
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logoInter} alt="logo inter" width={172} height={61} />

        <UserInfo >
          <UserCircle initials="JT"/>
          <div>
            <p>Olá. <span className="primary-color font-bold">Jeandson</span> </p>
            <strong>2223422-34</strong><br />
            {/* eslint-disable-next-line */}
            <a href="#"  onClick={handleLogoff} >Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header;