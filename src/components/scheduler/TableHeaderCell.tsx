import React from 'react';
import Box from '@mui/material/Box';
import { DateTime } from 'luxon';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type ContainerProps = {
  children: React.ReactNode;
  day: DateTime;
};

const Container = ({ children, day }: ContainerProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        px: 0.5,
        border: '1px solid gainsboro',
      }}
    >
      {children}
    </Box>
  );
};
type TableHeaderCellProps = {
  day: DateTime;
};

export const TableHeaderCell = ({ day }: TableHeaderCellProps): JSX.Element => {
  const isBreakpoint = useMediaQuery(useTheme().breakpoints.down('md'));

  return (
    <Container day={day}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>{isBreakpoint ? day.monthShort : day.monthLong}</Typography>
        <Typography>{0}</Typography>
      </Box>

      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        {day.day}
      </Typography>
      <Typography sx={{ textAlign: 'right', textTransform: 'uppercase' }}>
        {day.weekdayShort}
      </Typography>
    </Container>
  );
};
