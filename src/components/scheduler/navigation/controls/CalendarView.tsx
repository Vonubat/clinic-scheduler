import React, { useState, MouseEvent } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import GridOnIcon from '@mui/icons-material/GridOn';
import { Color } from 'constants/index';
import { useAppDispatch } from 'hooks';
import { setView } from 'store';

export const CalendarView = (): JSX.Element => {
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
        id="calendar-view-button"
        aria-controls={open ? 'calendar-view' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <GridOnIcon sx={{ color: Color.white100 }} />
      </IconButton>
      <Menu
        id="calendar-view-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'calendar-view-button',
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            dispatch(setView(1));
          }}
        >
          1 День
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            dispatch(setView(3));
          }}
        >
          3 Дня
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            dispatch(setView(7));
          }}
        >
          Неделя
        </MenuItem>
      </Menu>
    </>
  );
};
