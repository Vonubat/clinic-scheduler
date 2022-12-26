import React from 'react';
import { useAppSelector } from 'hooks';
import { timeSelector } from 'store';
import Box from '@mui/material/Box';
import { fillDaysHelper } from 'utils';
import { TableHeaderCell } from './TableHeaderCell';
import { Color } from '../../constants';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <Box sx={{ display: 'flex' }}>{children}</Box>;
};

const EmptyCell = (): JSX.Element => {
  return <Box sx={{ maxWidth: 40, minWidth: 40, border: `0.5px solid ${Color.gainsboro100}` }} />;
};

export const TableHeader = (): JSX.Element => {
  const { dt } = useAppSelector(timeSelector);
  const days = fillDaysHelper(dt);

  return (
    <Container>
      <EmptyCell />
      {days.map((day): JSX.Element => {
        return <TableHeaderCell key={day.day} day={day} />;
      })}
    </Container>
  );
};
