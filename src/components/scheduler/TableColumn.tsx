import React from 'react';
import Box from '@mui/material/Box';
import { DateTime } from 'luxon';
import { TIMELINE, TableView } from 'constants/index';
import { TableColumnCell } from './TableColumnCell';
import { useAppSelector } from 'hooks';
import { timeSelector } from 'store';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  const { view } = useAppSelector(timeSelector);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: TableView[`$${view}`],
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
