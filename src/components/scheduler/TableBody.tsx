import React from 'react';
import Box from '@mui/material/Box';
import { Timeline } from './Timeline';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <Box sx={{ display: 'flex', height: '200vh' }}>{children}</Box>;
};

export const TableBody = (): JSX.Element => {
  return (
    <Container>
      <Timeline />
    </Container>
  );
};
