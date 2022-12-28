import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import { Color, Path } from 'constants/index';

export const ToHome = (): JSX.Element => {
  return (
    <IconButton component={RouterLink} to={Path.home}>
      <HomeIcon sx={{ color: Color.white100 }} />
    </IconButton>
  );
};
