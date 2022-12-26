import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import { ShiftLeft, ShiftRight } from './Shifts';
import { ZoomIn, ZoomOut, ZoomReset } from './Zooms';
import { ResetDateTime } from './ResetDateTime';
import { CalendarView } from './CalendarView';
import { MobileMenu } from './MobileMenu';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <Box sx={{ display: 'flex', gap: 2 }}>{children}</Box>;
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
    <Container>
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
