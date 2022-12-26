import React from 'react';
import Box from '@mui/material/Box';
import { Color } from 'constants/index';
import { NavigationDatePicker } from './NavigationDatePicker';
import { Controls } from './controls/Controls';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: Color.blueViolet100,
        p: 1,
      }}
    >
      {children}
    </Box>
  );
};

export const Navigation = (): JSX.Element => {
  return (
    <Container>
      <NavigationDatePicker />
      <Controls />
    </Container>
  );
};
