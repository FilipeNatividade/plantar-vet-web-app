import GlobalStyle from './GlobalStyle';
import { AppRoutes } from './AppRoutes';
import { FooterApp } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes />
      <FooterApp />
    </div>
  );
}

export default App;
