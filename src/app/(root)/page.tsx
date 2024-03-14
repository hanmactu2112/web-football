"use client";

import React from "react";
import { useTheme } from "next-themes";
import Ads from "../_components/Ads";
import LeaguesBlock from "../_components/block-league/LeaguesBlock";
import ContentOfTheDay from "../_components/contents/ContentOfTheDay";
import LeagueList from "../_components/feild-league/LeagueList";

const Home = () => {
  const { setTheme } = useTheme();

  return (
    <div className="items-cente flex h-full min-h-[100vh] w-full flex-col lg:w-[992px] xl:w-[1240px] 1xl:w-[1344px]">
      <div className="mx-0 my-4 flex min-h-[90px] w-full items-center justify-center">
        <Ads type="" />
      </div>
      <div className="grid grid-cols-[auto] lg:grid-cols-[236px_auto_314px] lg:gap-2 xl:grid-cols-[300px_640px_300px] 1xl:grid-cols-[300px_744px_300px]">
        <section className="hidden w-full lg:block">
          <LeagueList />
        </section>
        <section className="flex h-full w-full flex-col">
          <LeaguesBlock />
        </section>
        <div className="hidden lg:block">
          <ContentOfTheDay />
        </div>
      </div>
    </div>
  );
};

export default Home;
