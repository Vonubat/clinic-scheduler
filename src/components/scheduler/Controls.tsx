import React, { useState, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import { Button, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import GridOnIcon from '@mui/icons-material/GridOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Color, locale } from 'constants/index';
import { useAppDispatch } from 'hooks';
import { setDateTime, shiftLeft, shiftRight, zoomIn, zoomOut, zoomReset, setView } from 'store';
import { DateTime } from 'luxon';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <Box sx={{ display: 'flex', gap: 2 }}>{children}</Box>;
};

type GroupProps = {
  children: React.ReactNode;
};

const Group = ({ children }: GroupProps): JSX.Element => {
  return <Box sx={{ display: 'flex' }}>{children}</Box>;
};

const ShiftLeft = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <IconButton onClick={() => dispatch(shiftLeft())}>
      <ArrowBackIosIcon sx={{ color: Color.white100 }} />
    </IconButton>
  );
};

const ShiftRight = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <IconButton onClick={() => dispatch(shiftRight())}>
      <ArrowForwardIosIcon sx={{ color: Color.white100 }} />
    </IconButton>
  );
};

const ZoomIn = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <IconButton onClick={() => dispatch(zoomIn())}>
      <ZoomInIcon sx={{ color: Color.white100 }} />
    </IconButton>
  );
};

const ZoomOut = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <IconButton onClick={() => dispatch(zoomOut())}>
      <ZoomOutIcon sx={{ color: Color.white100 }} />
    </IconButton>
  );
};

const ZoomReset = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <IconButton onClick={() => dispatch(zoomReset())}>
      <ZoomOutMapIcon sx={{ color: Color.white100 }} />
    </IconButton>
  );
};

const ResetDateTime = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const dt = DateTime.now().setLocale(locale);
  return (
    <Button
      sx={{
        color: Color.white100,
        fontSize: '120%',
        p: 0,
        maxWidth: 30,
        border: `1px solid ${Color.white100}`,
      }}
      onClick={() => dispatch(setDateTime(dt))}
    >
      {dt.day}
    </Button>
  );
};

const CalendarView = (): JSX.Element => {
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

const MobileMenu = (): JSX.Element => {
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

export const Controls = (): JSX.Element => {
  const isBreakpoint: boolean = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <Container>
      {!isBreakpoint && (
        <Group>
          <ShiftLeft />
          <ShiftRight />
        </Group>
      )}
      {!isBreakpoint && (
        <Group>
          <ZoomIn />
          <ZoomOut />
          <ZoomReset />
        </Group>
      )}
      <ResetDateTime />
      <CalendarView />
      {isBreakpoint && <MobileMenu />}
    </Container>
  );
};
