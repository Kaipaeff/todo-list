import { memo } from 'react';
import { HeaderStyles, LogoImage } from './Header.styles';
import logo from '../../assets/img/images/logo.svg';

function Header() {
  return (
    <HeaderStyles>
      <LogoImage src={logo} alt="Логотип" />
    </HeaderStyles>
  );
}

export default memo(Header);
