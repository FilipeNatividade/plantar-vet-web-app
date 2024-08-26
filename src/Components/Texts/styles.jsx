import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 16px;
  margin-bottom: 20px;
  color: var(--cor-primaria);
  @media only screen and (min-width: 744px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 12px;
  color: var(--cor-secundario);
  @media only screen and (min-width: 744px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
`;

export const SubText = styled.span`
  font-size: 12px;
`;

export const Label = styled.label`
  font-size: 10px;
  color: var(--cor-texto-primario);
`;
