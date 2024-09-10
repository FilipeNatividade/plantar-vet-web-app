import React, { useEffect, useState } from 'react';
import { VerificationCode } from '../../Components/VerificationCode';
import { useNavigate } from 'react-router-dom';
import { OrderInformation } from '../../Components/OrderInformation';
import { useCustomState } from '../../Providers/UseCustomContext';
import { GetVerificationCode } from '../../Services';

export const OrderSummary = () => {
  const [codeError, setCodeError] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState();

  const { codeTrue, setCodeTrue } = useCustomState();

  const handleButtomClick = () => {
    GetVerificationCode(inputValue)
      .then((response) => {
        if (response) {
          setCodeTrue(true);
          setData(response);
        } else {
          setCodeError(true);
        }
      })
      .catch((error) => console.log(error));
  };

  if (codeTrue) {
    return <OrderInformation data={data} />;
  } else {
    return (
      <VerificationCode
        setCodeTrue={setCodeTrue}
        handleButtomClick={handleButtomClick}
        inputValue={inputValue}
        setInputValue={setInputValue}
        codeError={codeError}
      />
    );
  }
};
