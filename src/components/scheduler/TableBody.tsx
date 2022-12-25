import React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { Timeline } from './Timeline';

const Container = styled(Box)({
  display: 'flex',
  height: '200vh',
});

export const TableBody = (): JSX.Element => {
  return (
    <Container>
      <Timeline />
    </Container>
  );
};
