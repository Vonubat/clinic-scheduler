import React from 'react';
import Box from '@mui/material/Box';
import { DateTime } from 'luxon';
import { Color, TIMELINE } from '../../constants';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '14.285714%',
      }}
    >
      {children}
    </Box>
  );
};

type CellProps = {
  time: string;
  day: DateTime;
};

const Cell = ({ day, time }: CellProps): JSX.Element => {
  return <Box sx={{ height: '100%', border: `0.5px solid ${Color.gainsboro100}`, px: 0.5 }} />;
};

type TableColumnProps = {
  day: DateTime;
};

export const TableColumn = ({ day }: TableColumnProps): JSX.Element => {
  return (
    <Container>
      {TIMELINE.map((time: string): JSX.Element => {
        return <Cell key={time} day={day} time={time} />;
      })}
    </Container>
  );
};
