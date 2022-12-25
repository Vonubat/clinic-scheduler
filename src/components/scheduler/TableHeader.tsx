import React from 'react';
import { useAppSelector } from 'hooks';
import { timeSelector } from 'store';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { fillDaysHelper } from 'utils';
import { TableHeaderCell } from './TableHeaderCell';

const Container = styled(Box)({
  display: 'flex',
});

const Cell = styled(Box)({
  height: '100%',
});

export const TableHeader = (): JSX.Element => {
  const { selectedTime } = useAppSelector(timeSelector);
  const days = fillDaysHelper(selectedTime);
  console.log(days);

  return (
    <Container>
      <Box>X</Box>
      {days.map((day): JSX.Element => {
        return <TableHeaderCell key={day.day} day={day} />;
      })}
    </Container>
  );
};
