import ActiveModeTabs from '../ActiveModeTabs/ActiveModeTabs';
import LinearProgressBar from '../LinearProgressBar/LinearProgressBar';
import { NavbarStyled } from './Navbar.styles';

function Navbar() {
  return (
    <NavbarStyled>
      <ActiveModeTabs />
      <LinearProgressBar />
    </NavbarStyled>
  );
}

export default Navbar;
