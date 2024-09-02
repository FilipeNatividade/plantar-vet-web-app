import React from 'react';
import { InformationContainer } from '../InformationContainer';
import * as S from './styles';
import { SubTitle, Title } from '../Texts';

export const Delivery = ({ icon }) => {
  return (
    <InformationContainer title="Dados da entrega" icon={icon}>
      <S.TextBox>
        <Title props="Nome do destinatário" color="var(--cor-texto-primario)" />
        <SubTitle props="Rua do destinatário, 000" />
        <SubTitle props="Nome do bairro, cidade-UF" />
        <SubTitle props="CEP: 00000-000" />
      </S.TextBox>

      <S.TextBox>
        <Title
          props="Nome da transportadora"
          color="var(--cor-texto-primario)"
        />
        <S.TitleBox>
          <SubTitle props="Número do pedido" />
          <SubTitle props="000000000000" />
        </S.TitleBox>

        <S.TitleBox>
          <SubTitle props="Número do envio" />
          <SubTitle props="000000000000" />
        </S.TitleBox>
      </S.TextBox>

      <S.TextBox>
        <S.TitleBox>
          <SubTitle props="Origem:" />
          <SubTitle props="Cidade-UF" />
        </S.TitleBox>

        <S.TitleBox>
          <SubTitle props="Destino:" />
          <SubTitle props="Cidade-UF" />
        </S.TitleBox>
      </S.TextBox>
    </InformationContainer>
  );
};
