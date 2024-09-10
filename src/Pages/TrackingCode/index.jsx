import React, { useState } from 'react';
import { Title, SubTitle, Label } from '../../Components/Texts';
import { CustomContainer } from '../../Components/CustomContainer';
import { CustomInput } from '../../Components/CustomInput';
import { CustomButtom } from '../../Components/CustomButtom';
import { GetTrakingCode } from '../../Services';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logo from '../../assets/logo.png';
import * as S from './style';

export const TrackingCode = () => {
  const [inputValue, setInputValue] = useState('');
  const [codeError, setCodeError] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleButtomClick = () => {
    GetTrakingCode(inputValue)
      .then((response) => {
        if (response) {
          sessionStorage.setItem('code', inputValue);
          navigate(`/resumoDoPedido/${inputValue}`);
          console.log('response', response);
        } else {
          setCodeError(true);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <CustomContainer>
      <S.ImgTextBox>
        <S.Img src={logo} alt="Logo Plantar Vet" />
        <S.TextBox>
          <Title props="Tenha acesso a todos os detalhes do seu pedido" />
          <SubTitle props="Digite abaixo o número do pedido, um número de 00 dígitos que enviamos lá no Whatsapp" />
        </S.TextBox>
      </S.ImgTextBox>
      <S.FormBox>
        <Label props="Número do pedido" />

        <CustomInput
          placeholder="000000000000"
          value={inputValue}
          onChange={handleInputChange}
          error={codeError}
        />

        <CustomButtom
          onClick={handleButtomClick}
          text="Avançar"
          icon={<ArrowForwardIcon />}
          disable={!inputValue}
        />
      </S.FormBox>
    </CustomContainer>
  );
};
