import React from 'react';
import { TIMELINE } from '../../constants';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 40,
  minWidth: 40,
});

const Cell = styled(Box)({
  height: '100%',
});

export const Timeline = (): JSX.Element => {
  return (
    <Container>
      {TIMELINE.map((time: string): JSX.Element => {
        return <Cell key={time}>{time}</Cell>;
      })}
    </Container>
  );
};
