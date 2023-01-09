import React from 'react';
import Box from '@mui/material/Box';
import { Color } from 'constants/index';

import { Controls } from './controls/Controls';
import { NavigationDatePicker } from './NavigationDatePicker';
import { ToHome } from './ToHome';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <Box
      component="nav"
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

type GroupProps = {
  children: React.ReactNode;
};

const Group = ({ children }: GroupProps): JSX.Element => {
  return <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>{children}</Box>;
};

export const Navigation = (): JSX.Element => {
  return (
    <Container>
      <Group>
        <ToHome />
        <NavigationDatePicker />
      </Group>
      <Controls />
    </Container>
  );
};
