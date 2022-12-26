import React from 'react';
import Box from '@mui/material/Box';
import { Navigation, TableHeader, TableBody } from 'components';
import { fillDaysHelper } from 'utils';
import { useAppSelector } from 'hooks';
import { timeSelector } from 'store';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', userSelect: 'none' }}>{children}</Box>
  );
};

export const Scheduler = (): JSX.Element => {
  const { dt, view } = useAppSelector(timeSelector);
  const days = fillDaysHelper(dt, view);

  return (
    <Container>
      <Navigation />
      <TableHeader days={days} />
      <TableBody days={days} />
    </Container>
  );
};
