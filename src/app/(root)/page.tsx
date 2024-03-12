"use client";

import React from "react";
import { useTheme } from "next-themes";
import Ads from "../_components/Ads";
import LeagueListGroup from "../_components/top-league/LeagueListGroup";
import LeaguesBlock from "../_components/block-league/LeaguesBlock";
import ContentOfTheDay from "../_components/contents/ContentOfTheDay";

const Home = () => {
  const { setTheme } = useTheme();

  return (
    <div className="1xl:w-[1344px] xl:w-[1240px] items-cente flex h-full min-h-[100vh] w-full flex-col lg:w-[992px]">
      <div className="mx-0 my-4 flex min-h-[90px] w-full items-center justify-center">
        <Ads type="" />
      </div>
      <div className="xl:grid-cols-[300px_640px_300px] 1xl:grid-cols-[300px_744px_300px] xs:m-[0_16px] m-[0_8px_0_0] grid grid-cols-[auto] lg:grid-cols-[300px_auto] lg:gap-2">
        <section className="hidden w-full bg-red-300 lg:block">
          <LeagueListGroup />
        </section>
        <section className="flex h-full w-full flex-col">
          <LeaguesBlock />
        </section>
        <div className="xl:block hidden">
          <ContentOfTheDay />
        </div>
      </div>
    </div>
  );
};

export default Home;
