import React from 'react';
import { TIMELINE } from '../../constants';
import Box from '@mui/material/Box';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 40, minWidth: 40 }}>
      {children}
    </Box>
  );
};

type CellProps = {
  children: React.ReactNode;
};

const Cell = ({ children }: CellProps): JSX.Element => {
  return <Box sx={{ height: '100%' }}>{children}</Box>;
};

export const Timeline = (): JSX.Element => {
  return (
    <Container>
      {TIMELINE.map((time: string): JSX.Element => {
        return <Cell key={time}>{time}</Cell>;
      })}
    </Container>
  );
};
