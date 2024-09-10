import React, { useEffect, useState } from 'react';
import { InformationContainer } from '../InformationContainer';
import { SubTitle, Title } from '../Texts';
import PixOutlinedIcon from '@mui/icons-material/PixOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import * as S from './styles';

export const Payment = ({ icon, data }) => {
  const [payment, setPayment] = useState({});

  useEffect(() => {
    handlePayment();
  }, []);

  const handlePayment = () => {
    switch (data.formaPagamento) {
      case 'DEBITO':
        setPayment({
          paymentMethod: 'Débito',
          icon: <CreditCardIcon />,
        });
        break;
      case 'CREDITO':
        setPayment({
          paymentMethod: 'Crédito',
          icon: <CreditCardIcon />,
        });
        break;
      case 'BOLETO':
        setPayment({
          paymentMethod: 'Boleto',
          icon: <ReceiptLongIcon />,
        });
        break;
      case 'PIX':
        setPayment({
          paymentMethod: 'Pix',
          icon: <PixOutlinedIcon />,
        });
        break;
      default:
        break;
    }
  };

  return (
    <InformationContainer title="Detalhes do pagamento" icon={icon}>
      <S.HeaderBox>
        <S.IconBox>{payment.icon}</S.IconBox>
        <div>
          <Title
            props={payment.paymentMethod}
            color="var(--cor-texto-primario)"
          />
          <SubTitle props={`R$ ${data.total}`} />
        </div>
      </S.HeaderBox>

      <S.TextBox>
        <S.TitleBox>
          <SubTitle props="Subtotal" />
          <SubTitle props={`R$ ${data.subtotal}`} />
        </S.TitleBox>

        <S.TitleBox>
          <SubTitle props="Frete" />
          <SubTitle props={`R$ ${data.frete}`} />
        </S.TitleBox>

        <S.TitleBox>
          <SubTitle props="Desconto" />
          <SubTitle props={`R$ - ${data.desconto}`} />
        </S.TitleBox>
      </S.TextBox>
      <S.TitleBox>
        <SubTitle props="Total do pedido" color="var(--cor-primaria)" />
        <SubTitle props={`R$ ${data.total}`} color="var(--cor-primaria)" />
      </S.TitleBox>
    </InformationContainer>
  );
};
