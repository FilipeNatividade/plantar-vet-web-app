import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProductBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const ImgProduct = styled.div`
  width: 64px;
  height: 64px;
  background-color: var(--cor-bordas);
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 744px) {
    flex-direction: row;
    width: 100%;
    align-items: center;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;
