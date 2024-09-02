import styled from 'styled-components';

export const HeaderBox = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 0;
  align-items: center;
`;

export const IconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--cor-bordas);
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1280px) {
    width: 60px;
    height: 60px;
    svg {
      font-size: 52px;
    }
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  border-top: 1px solid var(--cor-bordas);
  border-bottom: 1px solid var(--cor-bordas);
  padding: 16px 0;
  margin-bottom: 16px;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
