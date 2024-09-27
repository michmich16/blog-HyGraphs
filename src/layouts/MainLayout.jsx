import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Content } from "../components/Content/Content";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};