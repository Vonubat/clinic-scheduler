import React, { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { Button, TextField } from '@mui/material';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useAppSelector, useAppDispatch } from 'hooks';
import { timeSelector } from 'store';
import { Color, locale } from '../../constants';
import { setDateTime } from 'store/slices/timeSlice';

export const NavigationDatePicker = () => {
  const { dt } = useAppSelector(timeSelector);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale={locale}>
        <Button
          sx={{ color: Color.white100 }}
          onClick={() => setIsOpen(!isOpen)}
          endIcon={<ExpandCircleDownIcon />}
        >{`${dt.monthLong} ${dt.year}`}</Button>
        <DatePicker
          disableMaskedInput
          open={isOpen}
          onClose={() => setIsOpen(false)}
          value={dt}
          onChange={(date) => date && dispatch(setDateTime(date))}
          renderInput={(params) => <TextField sx={{ visibility: 'hidden' }} {...params} />}
        />
      </LocalizationProvider>
    </React.Fragment>
  );
};
