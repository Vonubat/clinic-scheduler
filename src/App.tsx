import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Path } from 'constants/index';
import { Layout } from 'layout';
import { Main, Scheduler } from 'pages';

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path={Path.main} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={Path.scheduler} element={<Scheduler />} />
      </Route>
    </Routes>
  );
};
