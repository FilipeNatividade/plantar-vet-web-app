import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckIcon from '@mui/icons-material/Check';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SubText, Text } from '../Texts';
import { InformationContainer } from '../InformationContainer';
import * as S from './style';
import { format } from 'date-fns';

export const CustomStepper = ({ icon, data }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [status, setStatus] = useState();

  const steps = [
    {
      title: 'Seu pedido foi recebido!',
      date: data.criadoEm ? format(new Date(data.criadoEm), 'dd/MM/yyyy') : '',
    },
    {
      title: 'Seu pedido foi aprovado!',
      date: data.dataAprovacao
        ? format(new Date(data.dataAprovacao), 'dd/MM/yyyy')
        : '',
    },
    {
      title: 'Seu pedido está sendo separado!',
      date: data.dataSeparacao
        ? format(new Date(data.dataSeparacao), 'dd/MM/yyyy')
        : '',
    },
    {
      title: 'Seu pedido foi faturado! Clique em Visualizar a NF',
      date: data.dataFaturamento
        ? format(new Date(data.dataFaturamento), 'dd/MM/yyyy')
        : '',
    },
    {
      title: 'Seu pedido foi encaminhado para a expedição!',
      date: data.dataExpedicao
        ? format(new Date(data.dataExpedicao), 'dd/MM/yyyy')
        : '',
    },
    {
      title: 'Seu pedido foi coletado pela Transportadora',
      date: data.dataChegadaTransportadora
        ? format(new Date(data.dataChegadaTransportadora), 'dd/MM/yyyy')
        : '',
    },
  ];

  useEffect(() => {
    handleStatus();
  }, []);

  const CustomStepIcon = (props) => {
    const { active, completed } = props;
    return (
      <S.StepContainer active={active} completed={completed}>
        {(active || completed) && <CheckIcon />}
      </S.StepContainer>
    );
  };

  const handleStatus = () => {
    switch (data.status) {
      case 'NOVO':
        setStatus(0);
        break;
      case 'APROVADO':
        setStatus(1);
        break;
      case 'SEPARACAO':
        setStatus(2);
        break;
      case 'FATURADO':
        setStatus(3);
        break;
      case 'EXPEDICAO':
        setStatus(4);
        break;
      case 'COLETADO':
        setStatus(5);
        break;
      default:
        break;
    }
  };

  return (
    <InformationContainer title="Status do pedido" icon={icon}>
      <Box sx={{ width: '100%' }}>
        <Stepper
          activeStep={status}
          alternativeLabel={!isMobile}
          orientation={isMobile ? 'vertical' : 'horizontal'}
        >
          {steps.map((item) => (
            <Step key={item.title}>
              <StepLabel StepIconComponent={CustomStepIcon}>
                <div>
                  <Text props={item.title} />
                  <SubText props={item.date} />
                </div>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </InformationContainer>
  );
};
