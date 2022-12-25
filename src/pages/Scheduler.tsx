import React from 'react';
import Box from '@mui/material/Box';
import { TableHeader, TableBody } from 'components';
import styled from '@emotion/styled';

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  userSelect: 'none',
});

export const Scheduler = (): JSX.Element => {
  return (
    <Container>
      <TableHeader />
      <TableBody />
    </Container>
  );
};
