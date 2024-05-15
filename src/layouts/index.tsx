import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import LayoutWrapper from './LayoutWrapper';
import Sidebar from './Sidebar';
import LayoutProvider from './state/LayoutProvider';

type Props = {
  children?: React.ReactNode;
};

export default function BaseLayout({ children }: Readonly<Props>) {
  return (
    <LayoutProvider>
      <LayoutWrapper>
        <Header className="sm:col-start-2 sticky top-0" />
        <Sidebar />
        <main className="sm:col-start-2 h-full">{children ?? <Outlet />}</main>
      </LayoutWrapper>
    </LayoutProvider>
  );
}
