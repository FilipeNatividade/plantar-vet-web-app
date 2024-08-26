import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  gap: 50px;
  box-sizing: border-box;
  @media only screen and (min-width: 744px) {
    width: 384px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    width: 1000px;
    gap: 100px;
  }
`;
