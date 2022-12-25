import React from 'react';
import { useAppSelector } from 'hooks';
import { timeSelector } from 'store';
import { DateTime } from 'luxon';
import Box from '@mui/material/Box';
import { Timeline } from 'components';
import styled from '@emotion/styled';

const columns = [
  { id: 'timeLine', label: '', maxWidth: 40 },
  { id: 'code', label: 'ISO\u00a0Code', maxWidth: 40 },
  {
    id: 'population',
    label: 'Population',
    maxWidth: 40,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    maxWidth: 40,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    maxWidth: 40,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

const Container = styled(Box)({
  backgroundColor: '#cfe8fc',
  height: '200vh',
  display: 'flex',
});

export const Scheduler = (): JSX.Element => {
  const time = useAppSelector(timeSelector).dt;
  console.log(time.toLocaleString(DateTime.TIME_24_SIMPLE));

  return (
    <Container>
      <Timeline />
    </Container>
  );
};
