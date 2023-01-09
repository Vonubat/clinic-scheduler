import React from 'react';
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Border } from 'constants/index';
import { useAppSelector } from 'hooks';
import { DateTime } from 'luxon';
import { schedulerSelector } from 'store';

import { CabinetsWrapper } from './CabinetsWrapper';

type TableColumnCellProps = {
  time: string;
  day: DateTime;
};

export const TableColumnCell = ({ day, time }: TableColumnCellProps): JSX.Element => {
  const { type } = useAppSelector(schedulerSelector);
  const isBreakpoint: boolean = useMediaQuery(useTheme().breakpoints.down('md'));

  return (
    <Box
      sx={{
        height: 1,
        borderTop: type === 'work' ? 0 : Border.cell,
        borderBottom: Border.cell,
        borderLeft: Border.cell,
        borderRight: Border.cell,
      }}
    >
      {type === 'work' && (
        <CabinetsWrapper isBreakpoint={isBreakpoint} isEmpty={true} day={day} time={time} />
      )}
    </Box>
  );
};
