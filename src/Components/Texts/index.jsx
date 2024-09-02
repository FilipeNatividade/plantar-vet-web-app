import React from 'react';
import * as S from './styles.jsx';

export const Title = ({ props, color }) => {
  return (
    <S.Title color={color} style={{ marginBottom: '0' }}>
      {props}
    </S.Title>
  );
};

export const SubTitle = ({ props, color }) => {
  return <S.SubTitle color={color}>{props}</S.SubTitle>;
};

export const Text = ({ props }) => {
  return <S.Text>{props}</S.Text>;
};

export const SubText = ({ props, color }) => {
  return <S.SubText color={color}>{props}</S.SubText>;
};

export const Label = ({ props, color }) => {
  return <S.Label color={color}>{props}</S.Label>;
};
