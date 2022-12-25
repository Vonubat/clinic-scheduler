import React from 'react';
import { TIMELINE, locale } from '../../constants';
import { useAppSelector } from 'hooks';
import { timeSelector } from 'store';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { DateTime } from 'luxon';

const Container = styled(Box)({
  display: 'flex',
});

const Cell = styled(Box)({
  height: '100%',
});

export const TableHeader = (): JSX.Element => {
  const currentTime: DateTime = DateTime.now().setLocale(locale);
  const dt: DateTime = useAppSelector(timeSelector).dt;
  const days = fillDaysHelper(dt);
  return (
    <Container>
      <Box>X</Box>
      {TIMELINE.map((time: string): JSX.Element => {
        return <Cell key={time}>{time}</Cell>;
      })}
    </Container>
  );
};
