import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Color, TableView } from 'constants/index';
import { useAppSelector } from 'hooks';
import { DateTime } from 'luxon';
import { schedulerSelector } from 'store';

type ContainerProps = {
  children: React.ReactNode;
  day: DateTime;
};

const Container = ({ children, day }: ContainerProps): JSX.Element => {
  const { view } = useAppSelector(schedulerSelector);
  const diff: number = day.diffNow('days').days;
  let backgroundColor: Color = Color.white100;
  let color: Color = Color.black100;

  if (diff > -1 && diff < 0) {
    backgroundColor = Color.forestGreen100;
    color = Color.white100;
  }

  if (diff > 0) {
    backgroundColor = Color.forestGreen010;
    color = Color.forestGreen100;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: TableView[`$${view}`],
        px: 0.5,
        border: `0.5px solid ${Color.gainsboro100}`,
        backgroundColor,
        color,
      }}
    >
      {children}
    </Box>
  );
};

type MonthAndEventsWrapperProps = {
  isBreakpoint: boolean;
  day: DateTime;
};

const MonthAndEventsWrapper = ({ day, isBreakpoint }: MonthAndEventsWrapperProps): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography
        sx={{
          textTransform: 'capitalize',
          fontSize: isBreakpoint ? '70%' : '100%',
        }}
      >
        {isBreakpoint ? day.monthShort : day.monthLong}
      </Typography>
      <Typography
        sx={{
          fontSize: isBreakpoint ? '70%' : '100%',
        }}
      >
        {0}
      </Typography>
    </Box>
  );
};

type DayTypographyProps = {
  day: DateTime;
};

const DayTypography = ({ day }: DayTypographyProps): JSX.Element => {
  return (
    <Typography variant="h5" sx={{ textAlign: 'center' }}>
      {day.day}
    </Typography>
  );
};

type WeekdayTypographyProps = {
  isBreakpoint: boolean;
  day: DateTime;
};

const WeekdayTypography = ({ day, isBreakpoint }: WeekdayTypographyProps): JSX.Element => {
  return (
    <Typography
      sx={{
        textAlign: 'right',
        textTransform: 'uppercase',
        fontSize: isBreakpoint ? '70%' : '100%',
      }}
    >
      {day.weekdayShort}
    </Typography>
  );
};

type TableHeaderCellProps = {
  day: DateTime;
};

export const TableHeaderCell = ({ day }: TableHeaderCellProps): JSX.Element => {
  const isBreakpoint: boolean = useMediaQuery(useTheme().breakpoints.down('md'));

  return (
    <Container day={day}>
      <MonthAndEventsWrapper day={day} isBreakpoint={isBreakpoint} />
      <DayTypography day={day} />
      <WeekdayTypography day={day} isBreakpoint={isBreakpoint} />
    </Container>
  );
};
