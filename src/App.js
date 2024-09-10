import GlobalStyle from './GlobalStyle';
import { AppRoutes } from './AppRoutes';
import { FooterApp } from './Components/Footer';
import { MenuMobile } from './Components/MenuMobile';
import { Menu } from './Components/Menu';
import { useCustomState } from './Providers/UseCustomContext';

function App() {
  const { codeTrue } = useCustomState();

  return (
    <div className="App">
      {codeTrue && <Menu />}
      <GlobalStyle />
      <AppRoutes />
      <FooterApp />
      {codeTrue && (
        <div className="menu-mobile">
          <MenuMobile />
        </div>
      )}
    </div>
  );
}

export default App;
