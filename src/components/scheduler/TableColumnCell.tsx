import React from 'react';
import Box from '@mui/material/Box';
import { Color } from 'constants/index';
import { DateTime } from 'luxon';

type TableColumnCellProps = {
  time: string;
  day: DateTime;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TableColumnCell = ({ day, time }: TableColumnCellProps): JSX.Element => {
  return <Box sx={{ height: '100%', border: `0.5px solid ${Color.gainsboro100}`, px: 0.5 }} />;
};
