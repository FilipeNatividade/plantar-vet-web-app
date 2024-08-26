import React from 'react';
import { Button } from './style';

export const CustomButtom = ({ onClick, text, icon }) => {
  return (
    <Button onClick={onClick}>
      {text} {icon && icon}
    </Button>
  );
};
