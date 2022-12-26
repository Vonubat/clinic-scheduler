import React, { useEffect, useState } from 'react';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { Button, TextField } from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { Color, locale } from 'constants/index';
import { useAppDispatch, useAppSelector } from 'hooks';
import { DateTime } from 'luxon';
import { timeSelector } from 'store';
import { setDateTime } from 'store/slices/timeSlice';

export const NavigationDatePicker = () => {
  const { dt } = useAppSelector(timeSelector);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [date, setDate] = useState<DateTime>(dt);

  useEffect(() => {
    setDate(dt);
  }, [dt]);

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale={locale}>
        <Button
          sx={{ color: Color.white100 }}
          onClick={() => setIsOpen(!isOpen)}
          endIcon={<ExpandCircleDownIcon />}
        >{`${dt.monthLong} ${dt.year}`}</Button>
        <MobileDatePicker
          disableMaskedInput
          value={date}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onChange={(value) => value && setDate(value)}
          onAccept={(date) => date && dispatch(setDateTime(date))}
          renderInput={(params) => <TextField sx={{ display: 'none' }} {...params} />}
        />
      </LocalizationProvider>
    </React.Fragment>
  );
};
