import React, { useState } from 'react';
import { Title, SubTitle, Label } from '../../Components/Texts';
import logo from '../../assets/logo.png';
import { CustomContainer } from '../../Components/CustomContainer';
import * as S from './style';
import { CustomInput } from '../../Components/CustomInput';
import { CustomButtom } from '../../Components/CustomButtom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const TrackingCode = () => {
  const [inputValue, setInputValue] = useState('');
  const [codeError, setCodeError] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleButtomClick = () => {
    console.log(inputValue);
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
          onClick={handleButtomClick()}
          text="Avançar"
          icon={<ArrowForwardIcon />}
        />
      </S.FormBox>
    </CustomContainer>
  );
};
