import { Block } from '@mui/icons-material';
import styled from 'styled-components';

export const ContainerMobileMenu = styled.nav`
  border-top: 1px solid var(--cor-bordas);
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 708px) {
    border-top: none;
  }
`;

export const ContainerList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  max-width: 512px;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  flex-direction: column;
  font-size: 12px;
  position: relative;
  svg {
    font-size: 16px;
  }
  @media only screen and (min-width: 708px) {
    flex-direction: row;
  }
`;

export const ActiveBar = styled.div`
  background-color: var(--cor-primaria);
  width: 70%;
  height: 4px;
  position: absolute;
  top: 0;
  display: ${({ active }) => (active ? 'block' : 'none')};

  @media only screen and (min-width: 708px) {
    top: auto;
    bottom: 0;
  }
`;
