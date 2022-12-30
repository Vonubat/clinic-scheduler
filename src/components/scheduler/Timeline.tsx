import React, { MutableRefObject, useLayoutEffect, useRef } from 'react';
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Color, locale, TIMELINE } from 'constants/index';
import { useAppDispatch, useAppSelector, useWindowDimension } from 'hooks';
import { DateTime } from 'luxon';
import { schedulerSelector, setTableHeight } from 'store';
import { getAbsolutePosition } from 'utils';

type ContainerProps = {
  children: React.ReactNode;
  refs: MutableRefObject<HTMLElement | null>;
};

const Container = ({ children, refs }: ContainerProps): JSX.Element => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 40,
        minWidth: 40,
      }}
      ref={refs}
    >
      {children}
    </Box>
  );
};

type CellProps = {
  children: React.ReactNode;
};

const Cell = ({ children }: CellProps): JSX.Element => {
  const isBreakpoint: boolean = useMediaQuery(useTheme().breakpoints.down('md'));
  return <Box sx={{ height: '100%', fontSize: isBreakpoint ? '70%' : '100%' }}>{children}</Box>;
};

const TimeStamp = (): JSX.Element => {
  const { tableHeight } = useAppSelector(schedulerSelector);
  const dt: DateTime = DateTime.now().setLocale(locale);
  const position: number = getAbsolutePosition(dt, tableHeight);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: `${position}px`,
        height: '1px',
        width: 40,
        backgroundColor: Color.red100,
      }}
    ></Box>
  );
};

export const Timeline = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { zoom } = useAppSelector(schedulerSelector);
  const [, windowHeight] = useWindowDimension();
  const ref = useRef<null | HTMLElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      dispatch(setTableHeight(ref.current.clientHeight));
    }
  }, [zoom, windowHeight, dispatch]);

  return (
    <Container refs={ref}>
      {TIMELINE.map((time: string): JSX.Element => {
        return <Cell key={time}>{time}</Cell>;
      })}
      <TimeStamp />
    </Container>
  );
};
