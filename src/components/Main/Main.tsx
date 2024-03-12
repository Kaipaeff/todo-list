import Navbar from '../Navbar/Navbar';
import { MainStyles } from './Main.styles';

function Main() {
  return (
    <MainStyles>
      <Navbar />
      <h1>Hello, i'm a MainStyles</h1>
      {/* <Divider orientation="vertical" variant="middle" /> */}
    </MainStyles>
  );
}

export default Main;
