import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TrackingCode } from '../Pages/TrackingCode';
import { OrderSummary } from '../Pages/OrderSummary';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TrackingCode />} />
      <Route path="/resumoDoPedido/:code" element={<OrderSummary />} />
    </Routes>
  );
};
