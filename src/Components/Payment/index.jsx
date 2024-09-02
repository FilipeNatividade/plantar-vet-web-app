import React from 'react';
import { InformationContainer } from '../InformationContainer';
import { SubTitle, Title } from '../Texts';
import PixOutlinedIcon from '@mui/icons-material/PixOutlined';
import * as S from './styles';

export const Payment = ({ icon }) => {
  return (
    <InformationContainer title="Detalhes do pagamento" icon={icon}>
      <S.HeaderBox>
        <S.IconBox>
          <PixOutlinedIcon />
        </S.IconBox>
        <div>
          <Title props="pix" color="var(--cor-texto-primario)" />
          <SubTitle props="R$ 0.000,00" />
        </div>
      </S.HeaderBox>

      <S.TextBox>
        <S.TitleBox>
          <SubTitle props="Subtotal" />
          <SubTitle props="R$ 0.000,00" />
        </S.TitleBox>

        <S.TitleBox>
          <SubTitle props="Frete" />
          <SubTitle props="R$ 0.000,00" />
        </S.TitleBox>

        <S.TitleBox>
          <SubTitle props="Desconto" />
          <SubTitle props="R$ - 0.000,00" />
        </S.TitleBox>
      </S.TextBox>
      <S.TitleBox>
        <SubTitle props="Total do pedido" color="var(--cor-primaria)" />
        <SubTitle props="R$ 0.000,00" color="var(--cor-primaria)" />
      </S.TitleBox>
    </InformationContainer>
  );
};
