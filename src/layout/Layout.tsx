import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = (): JSX.Element => {
  /* const { isLoading } = useAppSelector(notificationSelector); */

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* {isLoading && <Loader />} */}
    </>
  );
};
