import React from 'react';
import { InformationContainer } from '../InformationContainer';
import { SubText, SubTitle } from '../Texts';
import * as S from './styles';

const array = [
  {
    titulo: 'Título do produto',
    Quantidade: '00',
    preco: '0.000,00',
  },
  {
    titulo: 'Título do produto',
    Quantidade: '00',
    preco: '0.000,00',
  },
  {
    titulo: 'Título do produto',
    Quantidade: '00',
    preco: '0.000,00',
  },
  {
    titulo: 'Título do produto',
    Quantidade: '00',
    preco: '0.000,00',
  },
  {
    titulo: 'Título do produto',
    Quantidade: '00',
    preco: '0.000,00',
  },
  {
    titulo: 'Título do produto',
    Quantidade: '00',
    preco: '0.000,00',
  },
];

export const Products = ({ icon }) => {
  return (
    <InformationContainer title="Informações dos produtos" icon={icon}>
      <S.Container>
        {array.map((product, index) => (
          <S.ProductBox key={index}>
            <S.ImgProduct></S.ImgProduct>

            <S.TextBox>
              <S.TitleBox>
                <SubTitle
                  props={product.titulo}
                  color="var(--cor-texto-primario)"
                />
                <SubText props={`Quantidade: ${product.Quantidade}`} />
              </S.TitleBox>

              <div>
                <SubText props={`R$ ${product.preco}`} />
              </div>
            </S.TextBox>
          </S.ProductBox>
        ))}
      </S.Container>
    </InformationContainer>
  );
};
