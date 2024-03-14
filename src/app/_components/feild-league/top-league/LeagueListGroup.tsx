import React from "react";
import LeagueListItem from "./LeagueListItem";
import allLeague from "@/data/allLeague";

const data = allLeague.popular

const LeagueListGroup = () => {
  if (!data?.length) return;
  return (
    <div className="h-fit">
      <div className="border-#f0f0f0] m-[0_0_16px_0] flex flex-col overflow-hidden border-[1px] border-solid bg-white pb-2 lg:mb-4 lg:rounded-2xl">
        <div className="flex h-14 items-center gap-[10px] p-[16px_24px_8px] text-base">
          <h2>Top League</h2>
        </div>
        <div className="flex flex-col">
          {data.map((i, idx) => {
            return <LeagueListItem key={i?.id} data={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LeagueListGroup;
