import React from 'react';
import Box from '@mui/material/Box';
import { DateTime } from 'luxon';
import { Color } from '../../constants';

type TableColumnCellProps = {
  time: string;
  day: DateTime;
};

export const TableColumnCell = ({ day, time }: TableColumnCellProps): JSX.Element => {
  return <Box sx={{ height: '100%', border: `0.5px solid ${Color.gainsboro100}`, px: 0.5 }} />;
};
