import React, { useEffect, useState } from 'react';
import { VerificationCode } from '../../Components/VerificationCode';
import { useNavigate } from 'react-router-dom';
import { OrderInformation } from '../../Components/OrderInformation';

export const OrderSummary = () => {
  const [codeTrue, setCodeTrue] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const code = sessionStorage.getItem('code');
  }, []);

  if (codeTrue) {
    return <OrderInformation />;
  } else {
    return <VerificationCode setCodeTrue={setCodeTrue} />;
  }
};
