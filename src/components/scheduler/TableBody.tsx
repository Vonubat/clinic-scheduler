import React from 'react';
import Box from '@mui/material/Box';
import { Timeline } from './Timeline';
import { DateTime } from 'luxon';
import { TableColumn } from './TableColumn';
import { useAppSelector } from 'hooks';
import { timeSelector } from 'store';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  const { zoom } = useAppSelector(timeSelector);
  return <Box sx={{ display: 'flex', height: `${zoom}vh` }}>{children}</Box>;
};

type TableBodyProps = {
  days: DateTime[];
};

export const TableBody = ({ days }: TableBodyProps): JSX.Element => {
  return (
    <Container>
      <Timeline />
      {days.map((day: DateTime): JSX.Element => {
        return <TableColumn key={day.day} day={day} />;
      })}
    </Container>
  );
};
