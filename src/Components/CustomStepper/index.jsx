import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckIcon from '@mui/icons-material/Check';
import useMediaQuery from '@mui/material/useMediaQuery';
import { InformationContainer } from '../InformationContainer';
import * as S from './style';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

export const CustomStepper = ({ icon }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const CustomStepIcon = (props) => {
    const { active, completed } = props;
    return (
      <S.StepContainer active={active} completed={completed}>
        {(active || completed) && <CheckIcon />}
      </S.StepContainer>
    );
  };

  return (
    <InformationContainer title="Status do pedido" icon={icon}>
      <Box sx={{ width: '100%' }}>
        <Stepper
          activeStep={1}
          alternativeLabel={!isMobile}
          orientation={isMobile ? 'vertical' : 'horizontal'}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </InformationContainer>
  );
};
