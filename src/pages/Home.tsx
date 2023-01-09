import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { Path } from 'constants/index';
import { useAppDispatch } from 'hooks';
import { setType } from 'store';
import { SchedulerType } from 'types';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <Box
      component="main"
      sx={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
    >
      {children}
    </Box>
  );
};

type SchedulerLinkProps = {
  children: React.ReactNode;
  type: SchedulerType;
};

const SchedulerLink = ({ children, type }: SchedulerLinkProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const clickHandler = (): void => {
    dispatch(setType(type));
  };

  return (
    <Button
      component={RouterLink}
      to={Path.scheduler}
      variant="contained"
      onClick={clickHandler}
      sx={{ height: 200, width: 300, fontSize: 25 }}
    >
      {children}
    </Button>
  );
};

export const Home = (): JSX.Element => {
  return (
    <Container>
      <SchedulerLink type="work">График работы</SchedulerLink>
      <SchedulerLink type="record">График записей</SchedulerLink>
    </Container>
  );
};
