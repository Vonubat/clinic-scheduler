import React from 'react';
import { useAppSelector } from 'hooks';
import { timeSelector } from 'store';

export const Scheduler = (): JSX.Element => {
  const time = useAppSelector(timeSelector).dt;
  // const dispatch = useAppDispatch();

  console.log(time);

  return <div className="Scheduler">HI</div>;
};
