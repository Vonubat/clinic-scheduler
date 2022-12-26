import React from 'react';
import Box from '@mui/material/Box';
import { DateTime } from 'luxon';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Color } from '../../constants';

type ContainerProps = {
  children: React.ReactNode;
  day: DateTime;
};

const Container = ({ children, day }: ContainerProps): JSX.Element => {
  let backgroundColor: Color = Color.white100;
  let color: Color = Color.black100;
  const diff: number = day.diffNow('days').days;

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
        width: '14.285714%',
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
      <Typography sx={{ textTransform: 'capitalize' }}>
        {isBreakpoint ? day.monthShort : day.monthLong}
      </Typography>
      <Typography>{0}</Typography>
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
  day: DateTime;
};

const WeekdayTypography = ({ day }: WeekdayTypographyProps): JSX.Element => {
  return (
    <Typography sx={{ textAlign: 'right', textTransform: 'uppercase' }}>
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
      <WeekdayTypography day={day} />
    </Container>
  );
};
