import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Color } from 'constants/index';
import { useAppDispatch } from 'hooks';
import { shiftLeft, shiftRight } from 'store';

export const ShiftLeft = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <IconButton onClick={() => dispatch(shiftLeft())}>
      <ArrowBackIosIcon sx={{ color: Color.white100 }} />
    </IconButton>
  );
};

export const ShiftRight = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <IconButton onClick={() => dispatch(shiftRight())}>
      <ArrowForwardIosIcon sx={{ color: Color.white100 }} />
    </IconButton>
  );
};
