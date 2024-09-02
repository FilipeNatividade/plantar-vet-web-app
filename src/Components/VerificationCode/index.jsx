import React, { useEffect, useState } from 'react';
import { Title, SubTitle, Label } from '../../Components/Texts';
import logo from '../../assets/logo.png';
import { CustomContainer } from '../../Components/CustomContainer';
import * as S from './style';
import { CustomInput } from '../../Components/CustomInput';
import { CustomButtom } from '../../Components/CustomButtom';
import SearchIcon from '@mui/icons-material/Search';
import LoopIcon from '@mui/icons-material/Loop';

export const VerificationCode = ({ setCodeTrue }) => {
  const [inputValue, setInputValue] = useState('');
  const [codeError, setCodeError] = useState(false);
  const [refreshCode, setRefreshCode] = useState(10);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (refreshCode > 0) {
      const intervalId = setInterval(() => {
        setRefreshCode((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      setCanResend(true);
    }
  }, [refreshCode]);

  const handleInputChange = (event) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleButtomClick = () => {
    console.log(inputValue);
    setCodeTrue(true);
  };

  const handleResendCode = () => {
    if (canResend) {
      console.log('Reenviar código');
      setRefreshCode(10);
      setCanResend(false);
    }
  };

  return (
    <CustomContainer>
      <S.ImgTextBox>
        <S.Img src={logo} alt="Logo Plantar Vet" />
        <S.TextBox>
          <Title props="Geramos um código para proteção dos seus dados" />
          <SubTitle props="Copie o código que acabamos de enviar para o seu no Whatsapp e cole abaixo para realizar a busca" />
        </S.TextBox>
      </S.ImgTextBox>
      <S.FormBox>
        <Label props="Código de segurança" />

        <CustomInput
          placeholder="000 000"
          value={inputValue}
          onChange={handleInputChange}
          error={codeError}
        />

        <CustomButtom
          onClick={handleButtomClick}
          text="Buscar pedido"
          icon={<SearchIcon />}
        />
        <S.ResendCode onClick={handleResendCode} disabled={!canResend}>
          Reenviar código {refreshCode}s <LoopIcon />
        </S.ResendCode>
      </S.FormBox>
    </CustomContainer>
  );
};
