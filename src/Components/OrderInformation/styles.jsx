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
  align-items: center;
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

export const DownloadBtn = styled.a`
  background-color: ${({ disable }) => (!disable ? '#cccccc' : '#046645')};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  gap: 5px;
  color: ${({ disable }) => (!disable ? '#666666' : '#fff !important')};
  height: 40px;

  svg {
    fill: ${({ disable }) => (!disable ? '#666666' : '#fff ')};
    font-size: 12px;
  }
`;
