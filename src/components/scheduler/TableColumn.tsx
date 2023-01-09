import React from 'react';
import Box from '@mui/material/Box';
import { TableView, TIMELINE } from 'constants/index';
import { useAppSelector } from 'hooks';
import { DateTime } from 'luxon';
import { schedulerSelector } from 'store';

import { TableColumnCell } from './TableColumnCell';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  const { view } = useAppSelector(schedulerSelector);
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
