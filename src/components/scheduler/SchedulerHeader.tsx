import React from 'react';
import { AppBar } from '@mui/material';

import { Navigation } from './navigation/Navigation';
import { TableHeader } from './TableHeader';

export const SchedulerHeader = (): JSX.Element => {
  return (
    <AppBar position="sticky" color="inherit">
      <Navigation />
      <TableHeader />
    </AppBar>
  );
};
