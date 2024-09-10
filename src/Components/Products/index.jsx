import React from 'react';
import { InformationContainer } from '../InformationContainer';
import { SubText, SubTitle } from '../Texts';
import * as S from './styles';

export const Products = ({ icon, data }) => {
  return (
    <InformationContainer title="Informações dos produtos" icon={icon}>
      <S.Container>
        {data.map((product, index) => (
          <S.ProductBox key={index}>
            <S.ImgProduct img={product.imagemLink}></S.ImgProduct>

            <S.TextBox>
              <S.TitleBox>
                <SubTitle
                  props={product.nome}
                  color="var(--cor-texto-primario)"
                />
                <SubText props={`Quantidade: ${product.quantidade}`} />
              </S.TitleBox>

              <div>
                <SubText props={`R$ ${parseFloat(product.valor)}`} />
              </div>
            </S.TextBox>
          </S.ProductBox>
        ))}
      </S.Container>
    </InformationContainer>
  );
};
