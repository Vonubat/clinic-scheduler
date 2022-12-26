import React from 'react';
import { Button } from '@mui/material';
import { Color, locale } from 'constants/index';
import { useAppDispatch } from 'hooks';
import { setDateTime } from 'store';
import { DateTime } from 'luxon';

export const ResetDateTime = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const dt = DateTime.now().setLocale(locale);
  return (
    <Button
      sx={{
        color: Color.white100,
        fontSize: '120%',
        p: 0,
        maxWidth: 30,
        border: `1px solid ${Color.white100}`,
      }}
      onClick={() => dispatch(setDateTime(dt))}
    >
      {dt.day}
    </Button>
  );
};
