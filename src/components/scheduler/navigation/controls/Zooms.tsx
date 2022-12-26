import React from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import { IconButton } from '@mui/material';
import { Color } from 'constants/index';
import { useAppDispatch } from 'hooks';
import { zoomIn, zoomOut, zoomReset } from 'store';

export const ZoomIn = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <IconButton onClick={() => dispatch(zoomIn())}>
      <ZoomInIcon sx={{ color: Color.white100 }} />
    </IconButton>
  );
};

export const ZoomOut = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <IconButton onClick={() => dispatch(zoomOut())}>
      <ZoomOutIcon sx={{ color: Color.white100 }} />
    </IconButton>
  );
};

export const ZoomReset = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <IconButton onClick={() => dispatch(zoomReset())}>
      <ZoomOutMapIcon sx={{ color: Color.white100 }} />
    </IconButton>
  );
};
