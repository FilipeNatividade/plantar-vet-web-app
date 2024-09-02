import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  border-bottom: 1px solid var(--cor-bordas);
`;

export const MenuMobileBox = styled.div`
  width: 60%;

  @media only screen and (max-width: 708px) {
    display: none;
  }
`;

export const BtnNotification = styled.button`
  width: fit-content;
  svg {
    font-size: 32px;
    fill: var(--cor-primaria);
  }
`;

export const Logo = styled.img`
  width: 73px;
`;
