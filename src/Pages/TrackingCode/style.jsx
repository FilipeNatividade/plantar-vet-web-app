import styled from 'styled-components';

export const Img = styled.img`
  width: 147px;
  display: block;
  margin: 0 auto;
  margin-bottom: 50px;
  @media only screen and (min-width: 744px) {
    width: 220px;
  }
  @media only screen and (min-width: 1280px) {
    margin: 0;
    margin-bottom: 50px;
  }
`;

export const ImgTextBox = styled.div`
  width: 100%;
  @media only screen and (min-width: 1280px) {
    margin: 0;
    margin-bottom: 50px;
    width: 384px;
  }
`;

export const TextBox = styled.div`
  width: 208px;
  @media only screen and (min-width: 744px) {
    width: 100%;
    margin: 0;
  }
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;

  @media only screen and (min-width: 1280px) {
    width: 384px;
  }
`;
