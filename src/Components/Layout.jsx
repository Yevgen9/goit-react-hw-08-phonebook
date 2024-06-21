import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AppBar } from "./AppBar/AppBar";

import s from './Layout.module.scss'

export const Layout = () => {
  return (
    <div className={s.layout}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
