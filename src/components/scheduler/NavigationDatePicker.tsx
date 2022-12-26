import React, { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { Button, TextField } from '@mui/material';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useAppSelector } from 'hooks';
import { timeSelector } from 'store';
import { Color } from '../../constants';

export const NavigationDatePicker = () => {
  const { dt } = useAppSelector(timeSelector);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDate, handleDateChange] = useState(dt);

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <Button
          sx={{ color: Color.white100 }}
          onClick={() => setIsOpen(!isOpen)}
          endIcon={<ExpandCircleDownIcon />}
        >{`${dt.monthLong} ${dt.year}`}</Button>
        <DatePicker
          open={isOpen}
          onClose={() => setIsOpen(false)}
          value={selectedDate}
          onChange={(date) => date && handleDateChange(date)}
          renderInput={(params) => <TextField sx={{ visibility: 'hidden' }} {...params} />}
        />
      </LocalizationProvider>
    </React.Fragment>
  );
};
