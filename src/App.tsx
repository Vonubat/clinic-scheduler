import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Path } from 'constants/index';
import { Layout } from 'layout';
import { Home, Scheduler } from 'pages';

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path={Path.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={Path.scheduler} element={<Scheduler />} />
      </Route>
    </Routes>
  );
};
