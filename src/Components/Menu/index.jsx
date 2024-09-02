import React from 'react';
import { MenuMobile } from '../MenuMobile';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import logo from '../../assets/logo.png';
import * as S from './styles';

export const Menu = () => {
  return (
    <S.MenuContainer>
      <S.Logo src={logo} alt="Logo da plantar" />
      <S.MenuMobileBox>
        <MenuMobile />
      </S.MenuMobileBox>

      <S.BtnNotification>
        <CircleNotificationsIcon />
      </S.BtnNotification>
    </S.MenuContainer>
  );
};
