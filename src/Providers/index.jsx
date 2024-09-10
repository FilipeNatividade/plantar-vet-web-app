import React from 'react';
import { CustomState } from './UseCustomContext';

export const Providers = ({ children }) => {
  return <CustomState>{children}</CustomState>;
};
