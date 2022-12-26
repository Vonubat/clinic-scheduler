import React from 'react';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import { useAppSelector } from 'hooks';
import { timeSelector } from 'store';
import { fillDaysHelper } from 'utils';

import { Navigation, TableBody, TableHeader } from 'components';

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
      <AppBar position="sticky" color="inherit">
        <Navigation />
        <TableHeader days={days} />
      </AppBar>
      <TableBody days={days} />
    </Container>
  );
};
