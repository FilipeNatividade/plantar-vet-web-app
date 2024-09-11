import React from 'react';
import { MenuMobile } from '../MenuMobile';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import logo from '../../assets/logo.png';
import * as S from './styles';
import NotificationModal from '../modal';

export const Menu = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <S.MenuContainer>
      <NotificationModal open={open} handleClose={handleClose} />
      <S.Logo src={logo} alt="Logo da plantar" />
      <S.MenuMobileBox>
        <MenuMobile />
      </S.MenuMobileBox>

      <S.BtnNotification onClick={handleOpen}>
        <CircleNotificationsIcon />
      </S.BtnNotification>
    </S.MenuContainer>
  );
};
