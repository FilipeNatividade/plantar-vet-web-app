import styled from 'styled-components';

export const StepContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid var(--cor-primaria);
  background-color: ${({ active, completed }) =>
    active || completed ? 'var(--cor-primaria)' : 'transparent'};

  svg {
    color: var(--cor-primaria);
    fill: white;
    border-radius: 50%;
    font-size: 14px;
  }
`;
