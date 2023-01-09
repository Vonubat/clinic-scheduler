import React from 'react';
import Box from '@mui/material/Box';
import { Color } from 'constants/index';
import { useAppSelector } from 'hooks';
import { DateTime } from 'luxon';
import { schedulerSelector } from 'store';
import { fillDaysHelper } from 'utils';

import { TableHeaderCell } from './TableHeaderCell';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <Box sx={{ display: 'flex' }}>{children}</Box>;
};

const EmptyCell = (): JSX.Element => {
  return (
    <Box
      sx={{
        maxWidth: 40,
        minWidth: 40,
        borderBottom: `0.5px solid ${Color.gainsboro100}`,
        borderTop: `0.5px solid ${Color.gainsboro100}`,
      }}
    />
  );
};

export const TableHeader = (): JSX.Element => {
  const { dt, view } = useAppSelector(schedulerSelector);
  const days = fillDaysHelper(dt, view);

  return (
    <Container>
      <EmptyCell />
      {days.map((day: DateTime): JSX.Element => {
        return <TableHeaderCell key={day.day} day={day} />;
      })}
    </Container>
  );
};
