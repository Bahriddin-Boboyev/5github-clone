import React from "react";
import { Header,Footer } from "../components";
import { Outlet } from "react-router-dom";
import { Home } from "../components/main/pages/home";

export const MainLayout = () => {
  return <>
    <header>
      <Header/>
    </header>
    <div className="container df-flex">
    <div>
      <Home/>
    </div>
    <main>
      <Outlet/>
    </main>
    </div>
    <footer>
      <Footer/>
    </footer>
  </>;
};
