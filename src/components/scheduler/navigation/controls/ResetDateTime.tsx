import React from 'react';
import { Button } from '@mui/material';
import { Color, locale } from 'constants/index';
import { useAppDispatch } from 'hooks';
import { DateTime } from 'luxon';
import { setDateTime } from 'store';

export const ResetDateTime = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const dt = DateTime.now().setLocale(locale);
  return (
    <Button
      sx={{
        color: Color.white100,
        fontSize: '120%',
        p: 0,
        minWidth: 40,
        border: `1px solid ${Color.white100}`,
      }}
      onClick={() => dispatch(setDateTime(dt))}
    >
      {dt.day}
    </Button>
  );
};
