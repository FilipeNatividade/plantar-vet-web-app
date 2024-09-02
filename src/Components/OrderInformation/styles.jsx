import styled from 'styled-components';

export const Container = styled.div`
  max-width: 512px;
  margin: 0 auto;
  width: 90%;
  padding: 1px;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media only screen and (min-width: 744px) {
    max-width: 768px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--cor-bg-header);
  padding: 16px;
  box-sizing: border-box;
`;

export const BtnBox = styled.div`
  width: 100%;

  @media only screen and (min-width: 744px) {
    width: 256px;
    margin-left: auto;
  }
`;
