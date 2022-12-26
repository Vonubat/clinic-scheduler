import React from 'react';
import Box from '@mui/material/Box';
import { Color } from 'constants/index';
import { DateTime } from 'luxon';

import { TableHeaderCell } from './TableHeaderCell';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <Box sx={{ display: 'flex' }}>{children}</Box>;
};

const EmptyCell = (): JSX.Element => {
  return (
    <Box sx={{ maxWidth: 40, minWidth: 40, borderBottom: `0.5px solid ${Color.gainsboro100}` }} />
  );
};

type TableHeaderProps = {
  days: DateTime[];
};

export const TableHeader = ({ days }: TableHeaderProps): JSX.Element => {
  return (
    <Container>
      <EmptyCell />
      {days.map((day: DateTime): JSX.Element => {
        return <TableHeaderCell key={day.day} day={day} />;
      })}
    </Container>
  );
};
