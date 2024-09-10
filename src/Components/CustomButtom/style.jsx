import styled from 'styled-components';

export const Button = styled.button`
  background-color: #046645;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  gap: 5px;
  color: #fff;
  height: 40px;

  svg {
    fill: #fff;
    font-size: 12px;
  }

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;

    svg {
      fill: #666666;
    }
  }
`;
