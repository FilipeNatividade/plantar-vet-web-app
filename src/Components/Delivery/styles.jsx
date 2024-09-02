import styled from 'styled-components';

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 16px 0;

  &:first-of-type {
    border-bottom: 1px solid var(--cor-bordas);
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
