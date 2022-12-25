import React from 'react';
import Box from '@mui/material/Box';
import { TableHeader, Timeline } from 'components';
import styled from '@emotion/styled';

const Container = styled(Box)({
  backgroundColor: '#cfe8fc',
  display: 'flex',
  flexDirection: 'column',
});

export const Scheduler = (): JSX.Element => {
  return (
    <Container>
      <Timeline />
      <TableHeader />
    </Container>
  );
};
