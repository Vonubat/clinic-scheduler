import React from 'react';
import Box from '@mui/material/Box';
import { DateTime } from 'luxon';
import { TIMELINE } from '../../constants';
import { TableColumnCell } from './TableColumnCell';

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

type TableColumnProps = {
  day: DateTime;
};

export const TableColumn = ({ day }: TableColumnProps): JSX.Element => {
  return (
    <Container>
      {TIMELINE.map((time: string): JSX.Element => {
        return <TableColumnCell key={time} day={day} time={time} />;
      })}
    </Container>
  );
};
