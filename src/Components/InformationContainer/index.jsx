import React from 'react';
import * as S from './styles';
import { SubText } from '../Texts';

export const InformationContainer = ({ children, title, icon }) => {
  return (
    <S.Container>
      <S.TitleBox>
        {icon}
        <SubText props={title} />
      </S.TitleBox>
      <S.ChidrenBox>{children}</S.ChidrenBox>
    </S.Container>
  );
};
