import React from 'react';
import Box from '@mui/material/Box';
import { Color } from '../../constants';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <Box sx={{ display: 'flex', backgroundColor: Color.blueViolet100 }}>{children}</Box>;
};

export const Navigation = (): JSX.Element => {
  return <Container>Hello world!</Container>;
};
