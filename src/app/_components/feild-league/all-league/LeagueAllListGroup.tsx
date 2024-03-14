"use client";
import React, { useState } from "react";
import LeagueAllItem from "./LeagueAllItem";
import allLeague from "@/data/allLeague";
import { Button } from "@/components/ui/button";

const data = allLeague.countries;
const international = allLeague.international[0];

const LeagueAllListGroup = () => {
  const [isExpand, setExpand] = useState(false);
  return (
    <div className="h-fit">
      <div className="border-#f0f0f0] m-[0_0_16px_0] flex flex-col overflow-hidden border-[1px] border-solid bg-white pb-2 lg:mb-4 lg:rounded-2xl">
        <Button
          onClick={() => setExpand(true)}
          className="flex h-14 items-center justify-start gap-[10px] bg-transparent p-[16px_24px_8px] text-base text-black hover:bg-transparent"
        >
          <h2>All leagues</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            className=""
          >
            <path fill="none" d="M15 0H0v15h15z"></path>
            <path
              fill="var(--GlobalColorScheme-ChevronSvg-datepickerRightLeft)"
              d="M.3 1.71L2.886 4.3a1 1 0 0 0 1.41 0l2.59-2.59A1 1 0 0 0 6.176 0H1a1 1 0 0 0-.7 1.71z"
              transform="rotate(180 5.54 4.796)"
            ></path>
          </svg>
        </Button>
        <div className="flex flex-col">
          <section className="w-full p-[0_16px] text-gray-500 focus-within:text-black">
            <div className="relative m-[10px_0] flex h-8 items-center rounded-[23px] border-[1px] border-solid border-[#e8e8e8] bg-white p-[0_24px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                className="fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  data-name="Path 4636"
                  d="M0 0h24v24H0z"
                  fill="none"
                ></path>
                <path
                  id="filter_icon"
                  data-name="Path 4637"
                  d="M11 18h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM3 7a1 1 0 0 0 1 1h16a1 1 0 0 0 0-2H4a1 1 0 0 0-1 1zm4 6h10a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2z"
                  fill="currentColor"
                ></path>
              </svg>
              <input
                type="text"
                className="h-full w-full border-none bg-white pl-3 text-sm outline-none"
                placeholder="Filter"
              />
            </div>
          </section>
          <div className="flex flex-col">
            <LeagueAllItem key={international.ccode} data={international} />
            {data.map((i) => {
              return <LeagueAllItem key={i?.ccode} data={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueAllListGroup;
