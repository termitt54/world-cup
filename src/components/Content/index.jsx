import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../constants/routes";

import "./index.scss";

export const Content = () => {
  return (
    <section className="content">
      <Routes>
        {routes.map((route) => {
          return (
            <Route key={Date.now()} path={route.path} element={route.page} />
          );
        })}
      </Routes>
    </section>
  );
};
