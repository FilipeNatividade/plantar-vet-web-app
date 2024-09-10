import React from 'react';
import { Button } from './style';

export const CustomButtom = ({ onClick, text, icon, disable = false }) => {
  return (
    <Button onClick={onClick} disabled={disable}>
      {text} {icon && icon}
    </Button>
  );
};
