"use client";

import React from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Ads from "../_components/Ads";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="root mx-auto grid gap-4 w-full grid-cols-[minmax(0,1fr)_min(100%,1280px)_minmax(0,1fr)] items-center justify-center">
        <Ads type="" />
        <div className="root-container w-full">
          <div className="wrapper">{children}</div>
        </div>
        <Ads type="" />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
