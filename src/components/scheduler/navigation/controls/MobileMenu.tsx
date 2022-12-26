import React, { useState, MouseEvent } from 'react';
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Color } from 'constants/index';
import { useAppDispatch } from 'hooks';
import { shiftLeft, shiftRight, zoomIn, zoomOut, zoomReset } from 'store';

export const MobileMenu = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="mobile-menu-button"
        aria-controls={open ? 'mobile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ color: Color.white100 }} />
      </IconButton>
      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'mobile-menu-button',
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            dispatch(shiftLeft());
          }}
        >
          <ListItemIcon>
            <ArrowBackIosIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Предыдущий период</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            dispatch(shiftRight());
          }}
        >
          <ListItemIcon>
            <ArrowForwardIosIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Следующий период</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            dispatch(zoomIn());
          }}
        >
          <ListItemIcon>
            <ZoomInIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Растянуть по вертикали</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            dispatch(zoomOut());
          }}
        >
          <ListItemIcon>
            <ZoomOutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Сжать по вертикали</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            dispatch(zoomReset());
          }}
        >
          <ListItemIcon>
            <ZoomOutMapIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Стандартная вертикаль</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
