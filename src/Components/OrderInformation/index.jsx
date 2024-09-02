import React from 'react';
import { Label, SubText, Text } from '../Texts';
import { CustomButtom } from '../CustomButtom';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { CustomStepper } from '../CustomStepper';
import ListIcon from '@mui/icons-material/List';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import * as S from './styles';
import { Products } from '../Products';
import { Payment } from '../Payment';
import { Delivery } from '../Delivery';

export const OrderInformation = () => {
  const handleDownload = () => {
    // Defina o caminho para o arquivo que você deseja baixar
    const fileUrl = 'path/to/your/file.pdf';
    const fileName = 'file.pdf';

    // Crie um link temporário para o download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName);

    // Adicione o link ao DOM, clique nele, e depois remova-o
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <S.Container>
      <S.Header>
        <div>
          <Text props="Pedido 0000000000" />
          <SubText props="Está a caminho" color="var(--cor-primaria)" />
        </div>
        <div>
          <Label props="Chega até" />{' '}
          <Label props="00/00/00" color="var(--cor-primaria)" />
        </div>
      </S.Header>
      <S.BtnBox>
        <CustomButtom
          onClick={handleDownload}
          text="Ver nota fiscal"
          icon={<DescriptionOutlinedIcon />}
        />
      </S.BtnBox>
      <CustomStepper icon={<ListIcon />} />
      <Products icon={<Inventory2OutlinedIcon />} />
      <Payment icon={<LocalAtmOutlinedIcon />} />
      <Delivery icon={<LocalShippingOutlinedIcon />} />
    </S.Container>
  );
};
