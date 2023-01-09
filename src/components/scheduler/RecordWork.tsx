import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { CABINETS, Color, locale } from 'constants/index';
import { DateTime } from 'luxon';
import { WorkData } from 'types';
import { getAbsolutePosition } from 'utils';

type RecordProps = {
  heightOfContainer: number;
  data: WorkData;
};

export const RecordWork = ({ heightOfContainer, data }: RecordProps): JSX.Element => {
  const { master, color, cabinet, startTimeHours, endTimeHours, startTimeMinutes, endTimeMinutes } =
    data;
  const positionStart: number = getAbsolutePosition(
    DateTime.now().setLocale(locale).set({ hour: startTimeHours, minute: startTimeMinutes }),
    heightOfContainer
  );
  const positionEnd: number = getAbsolutePosition(
    DateTime.now().setLocale(locale).set({ hour: endTimeHours, minute: endTimeMinutes }),
    heightOfContainer
  );
  const heightOfRecord: number = positionEnd - positionStart;

  return (
    <Box
      sx={{
        position: 'absolute',
        top: `${positionStart}px`,
        left: `${(cabinet - 1) * (100 / CABINETS.length)}%`,
        width: `${100 / CABINETS.length}%`,
        height: `${heightOfRecord}px`,
        backgroundColor: color,
      }}
    >
      <Typography variant="subtitle2" noWrap sx={{ color: Color.white100 }}>
        {master}
      </Typography>
      <Typography variant="subtitle2" noWrap sx={{ color: Color.white100 }}>
        {`${startTimeHours}:${startTimeMinutes}-${endTimeHours}:${endTimeMinutes}`}
      </Typography>
    </Box>
  );
};
