import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import ListIcon from '@mui/icons-material/List';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import * as S from './styles';

export const MenuMobile = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleScrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
    setActiveMenu(sectionId);
  };

  return (
    <S.ContainerMobileMenu>
      <S.ContainerList>
        <S.ListItem>
          <S.ActiveBar active={activeMenu === 'status'} />
          <ListIcon />
          <button onClick={() => handleScrollToSection('status')}>
            Status
          </button>
        </S.ListItem>
        <S.ListItem>
          <S.ActiveBar active={activeMenu === 'produtos'} />
          <Inventory2OutlinedIcon />
          <button onClick={() => handleScrollToSection('produtos')}>
            Produtos
          </button>
        </S.ListItem>
        <S.ListItem>
          <S.ActiveBar active={activeMenu === 'pagamento'} />
          <LocalAtmOutlinedIcon />
          <button onClick={() => handleScrollToSection('pagamento')}>
            Pagamento
          </button>
        </S.ListItem>
        <S.ListItem>
          <S.ActiveBar active={activeMenu === 'entrega'} />
          <LocalShippingOutlinedIcon />
          <button onClick={() => handleScrollToSection('entrega')}>
            Entrega
          </button>
        </S.ListItem>
      </S.ContainerList>
    </S.ContainerMobileMenu>
  );
};
