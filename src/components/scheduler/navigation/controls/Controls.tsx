import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { CalendarView } from './CalendarView';
import { MobileMenu } from './MobileMenu';
import { ResetDateTime } from './ResetDateTime';
import { ShiftLeft, ShiftRight } from './Shifts';
import { ZoomIn, ZoomOut, ZoomReset } from './Zooms';

type ContainerProps = {
  children: React.ReactNode;
  isBreakpoint: boolean;
};

const Container = ({ children, isBreakpoint }: ContainerProps): JSX.Element => {
  return <Box sx={{ display: 'flex', gap: isBreakpoint ? 0 : 2 }}>{children}</Box>;
};

type GroupProps = {
  children: React.ReactNode;
};

const Group = ({ children }: GroupProps): JSX.Element => {
  return <Box sx={{ display: 'flex' }}>{children}</Box>;
};

export const Controls = (): JSX.Element => {
  const isBreakpoint: boolean = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <Container isBreakpoint={isBreakpoint}>
      {!isBreakpoint && (
        <Group>
          <ShiftLeft />
          <ShiftRight />
        </Group>
      )}
      {!isBreakpoint && (
        <Group>
          <ZoomIn />
          <ZoomOut />
          <ZoomReset />
        </Group>
      )}
      <ResetDateTime />
      <CalendarView />
      {isBreakpoint && <MobileMenu />}
    </Container>
  );
};
