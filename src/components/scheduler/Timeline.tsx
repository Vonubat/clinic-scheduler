import React, { useRef, useState, MutableRefObject, useLayoutEffect } from 'react';
import { Color, TIMELINE } from 'constants/index';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useAppSelector, useWindowDimension } from 'hooks';
import { timeSelector } from 'store';

type ContainerProps = {
  children: React.ReactNode;
  containerEl: MutableRefObject<HTMLElement | null>;
};

const Container = ({ children, containerEl }: ContainerProps): JSX.Element => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 40,
        minWidth: 40,
      }}
      ref={containerEl}
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

type TimeStampProps = {
  height: number;
};

const TimeStamp = ({ height }: TimeStampProps): JSX.Element => {
  const { dt } = useAppSelector(timeSelector);
  const position = ((dt.hour * 60 + dt.minute) / (24 * 60)) * height;

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
  const { zoom } = useAppSelector(timeSelector);
  const [, windowHeight] = useWindowDimension();
  const [height, setHeight] = useState(0);
  const ref = useRef<null | HTMLElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, [zoom, windowHeight]);

  return (
    <Container containerEl={ref}>
      {TIMELINE.map((time: string): JSX.Element => {
        return <Cell key={time}>{time}</Cell>;
      })}
      <TimeStamp height={height} />
    </Container>
  );
};
