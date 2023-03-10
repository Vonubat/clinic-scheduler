import React, { forwardRef, useRef } from 'react';
import { SwipeableHandlers, useSwipeable } from 'react-swipeable';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from 'hooks';
import { DateTime } from 'luxon';
import { shiftLeft, shiftRight } from 'store';
import { schedulerSelector } from 'store';
import { fillDaysHelper } from 'utils';

import { TableColumn } from './TableColumn';
import { Timeline } from './Timeline';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = forwardRef(
  ({ children }: ContainerProps, ref: React.ForwardedRef<unknown>): JSX.Element => {
    const { zoom } = useAppSelector(schedulerSelector);
    return (
      <Box sx={{ display: 'flex', height: `${zoom}vh` }} ref={ref}>
        {children}
      </Box>
    );
  }
);

export const TableBody = (): JSX.Element => {
  const { dt, view } = useAppSelector(schedulerSelector);
  const dispatch = useAppDispatch();
  const handlers: SwipeableHandlers = useSwipeable({
    onSwipedLeft: () => dispatch(shiftRight()),
    onSwipedRight: () => dispatch(shiftLeft()),
  });

  // setup ref for your usage
  const myRef = useRef<HTMLElement | null>(null);

  const refPassthrough = (el: HTMLElement): void => {
    // call useSwipeable ref prop with el
    handlers.ref(el);
    // set myRef el so you can access it yourself
    myRef.current = el;
  };

  const days = fillDaysHelper(dt, view);

  return (
    <Container {...handlers} ref={refPassthrough}>
      <Timeline />
      {days.map((day: DateTime): JSX.Element => {
        return <TableColumn key={day.day} day={day} />;
      })}
    </Container>
  );
};
