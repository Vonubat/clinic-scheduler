import React from 'react';
import Box from '@mui/material/Box';

import { TableBody } from 'components';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <Box component="main" sx={{ display: 'flex', flexDirection: 'column', userSelect: 'none' }}>
      {children}
    </Box>
  );
};

export const Scheduler = (): JSX.Element => {
  return (
    <Container>
      <TableBody />
    </Container>
  );
};
