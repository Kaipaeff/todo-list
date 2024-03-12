import Header from './components/Header/Header';
import { ContainerStyles } from './styles/ContainerStyles';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />

      <ContainerStyles>
        <h1>Hello, i'm a ContainerStyles</h1>
      </ContainerStyles>
    </>
  );
}

export default App;
