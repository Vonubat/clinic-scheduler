import React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { DateTime } from 'luxon';
import { Typography } from '@mui/material';
import { useAppSelector } from 'hooks';
import { timeSelector } from 'store';

type Props = {
  day: DateTime;
};

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const TableHeaderCell = ({ day }: Props): JSX.Element => {
  const { currentTime } = useAppSelector(timeSelector);

  return (
    <Container>
      <Typography>{day.monthLong}</Typography>
      <Typography>{0}</Typography>
      <Typography>{day.day}</Typography>
      <Typography>{day.weekdayShort}</Typography>
    </Container>
  );
};
