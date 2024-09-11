import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import { format } from 'date-fns';
import { Label, Text } from '../Texts';
import { CustomStepper } from '../CustomStepper';
import ListIcon from '@mui/icons-material/List';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import * as S from './styles';
import { Products } from '../Products';
import { Payment } from '../Payment';
import { Delivery } from '../Delivery';

export const OrderInformation = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <S.Container>
      <S.Header>
        <div>
          <Text props={`Pedido ${data.numeroPedido}`} />
          {/* <SubText props="Está a caminho" color="var(--cor-primaria)" /> */}
        </div>
        <div>
          <Label props="Chega até" />{' '}
          <Label
            props={format(new Date(data.dataPrevisaoChegada), 'dd/MM/yyyy')}
            color="var(--cor-primaria)"
          />
        </div>
      </S.Header>
      <S.BtnBox>
        <S.DownloadBtn
          href={data.notaFiscalLink}
          target="_blank"
          disable={data.notaFiscalLink}
        >
          Visualizar nota fiscal
          <DescriptionOutlinedIcon />
        </S.DownloadBtn>
      </S.BtnBox>

      <Element name="status">
        <CustomStepper data={data} icon={<ListIcon />} />
      </Element>

      <Element name="produtos">
        <Products icon={<Inventory2OutlinedIcon />} data={data.produtos} />
      </Element>

      <Element name="pagamento">
        <Payment icon={<LocalAtmOutlinedIcon />} data={data.pagamento} />
      </Element>

      <Element name="entrega">
        <Delivery
          icon={<LocalShippingOutlinedIcon />}
          dataAddressee={data.destinatario}
        />
      </Element>
    </S.Container>
  );
};
