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

export const TableHeader = (): JSX.Element => {
  const { dt } = useAppSelector(timeSelector);
  const days = fillDaysHelper(dt);
  console.log(days);

  return (
    <Container>
      <Box sx={{ maxWidth: 40, minWidth: 40 }} />
      {days.map((day): JSX.Element => {
        return <TableHeaderCell key={day.day} day={day} />;
      })}
    </Container>
  );
};
