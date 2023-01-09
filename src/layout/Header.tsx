import React from 'react';
import { useLocation } from 'react-router-dom';
import { Path } from 'constants/index';

import { SchedulerHeader } from 'components';

export const Header = (): JSX.Element => {
  const location = useLocation().pathname;

  return <>{location === Path.scheduler && <SchedulerHeader />}</>;
};
