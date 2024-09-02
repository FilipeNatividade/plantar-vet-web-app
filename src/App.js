import GlobalStyle from './GlobalStyle';
import { AppRoutes } from './AppRoutes';
import { FooterApp } from './Components/Footer';
import { MenuMobile } from './Components/MenuMobile';
import { Menu } from './Components/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <GlobalStyle />
      <AppRoutes />
      <FooterApp />
      <div className="menu-mobile">
        <MenuMobile />
      </div>
    </div>
  );
}

export default App;
