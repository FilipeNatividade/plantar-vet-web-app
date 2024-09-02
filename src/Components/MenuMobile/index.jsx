import React from 'react';
import ListIcon from '@mui/icons-material/List';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import * as S from './styles';

export const MenuMobile = () => {
  return (
    <S.ContainerMobileMenu>
      <S.ContainerList>
        <S.ListItem>
          <S.ActiveBar />
          <ListIcon />
          <a href="/">Status</a>
        </S.ListItem>
        <S.ListItem>
          <S.ActiveBar />
          <Inventory2OutlinedIcon />
          <a href="/">Produtos</a>
        </S.ListItem>
        <S.ListItem>
          <S.ActiveBar />
          <LocalAtmOutlinedIcon />
          <a href="/">Pagamento</a>
        </S.ListItem>
        <S.ListItem>
          <S.ActiveBar />
          <LocalShippingOutlinedIcon />
          <a href="/">Entrega</a>
        </S.ListItem>
      </S.ContainerList>
    </S.ContainerMobileMenu>
  );
};
