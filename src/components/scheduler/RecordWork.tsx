import React from 'react';
import Box from '@mui/material/Box';
import { locale } from 'constants/index';
import { DateTime } from 'luxon';
import { WorkData } from 'types';
import { getAbsolutePosition } from 'utils';

type RecordProps = {
  heightOfContainer: number;
  data: WorkData;
};

export const RecordWork = ({ heightOfContainer, data }: RecordProps): JSX.Element => {
  const {
    master,
    color,
    cabinet,
    year,
    month,
    day,
    startTimeHours,
    endTimeHours,
    startTimeMinutes,
    endTimeMinutes,
  } = data;
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
        height: `${heightOfRecord}px`,
        width: 1,
        backgroundColor: color,
      }}
    ></Box>
  );
};
