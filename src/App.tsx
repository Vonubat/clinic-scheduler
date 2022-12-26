import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { Scheduler } from 'pages';

export const App = (): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <Scheduler />
    </LocalizationProvider>
  );
};
