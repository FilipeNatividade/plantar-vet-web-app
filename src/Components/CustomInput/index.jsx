import React from 'react';
import * as S from './style';

export const CustomInput = ({
  value,
  onChange,
  placeholder,
  name,
  id,
  className,
  error,
}) => {
  return (
    <div>
      <S.Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        name={name}
        id={id}
        className={className}
      />
      {error && <S.Error>Código inválido</S.Error>}
    </div>
  );
};
