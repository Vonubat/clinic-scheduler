import React from 'react';
import Box from '@mui/material/Box';
import { TableHeader, TableBody } from 'components';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', userSelect: 'none' }}>{children}</Box>
  );
};

export const Scheduler = (): JSX.Element => {
  return (
    <Container>
      <TableHeader />
      <TableBody />
    </Container>
  );
};
