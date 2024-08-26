import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TrackingCode } from '../Pages/TrackingCode';
import { VerificationCode } from '../Pages/VerificationCode';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TrackingCode />} />
      <Route path="/codigoFerificacao" element={<VerificationCode />} />
    </Routes>
  );
};
