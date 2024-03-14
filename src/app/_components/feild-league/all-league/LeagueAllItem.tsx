"use client";

import Image from "next/image";
import React, { useState } from "react";
import LeagueItem from "./LeagueItem";
import { cn } from "@/lib/utils";

const LeagueAllItem = ({
  data,
}: {
  data: {
    ccode: string;
    name: string;
    leagues: {
      id: number;
      name: string;
      localizedName: string;
      pageUrl: string;
    }[];
    localizedName: string;
  };
}) => {
  const [isExpand, setExpand] = useState(false);
  const { ccode, name, leagues, localizedName } = data;
  const urlImage = `https://images.fotmob.com/image_resources/logo/teamlogo/${ccode.toLowerCase()}.png`;

  const expandCol = (e: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault();
    setExpand(!isExpand);
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={(e) => expandCol(e)}
        className="flex h-9 items-center justify-between p-[12px_16px_12px_24px] text-[14px]"
      >
        <div className="flex items-center gap-4 text-left">
          <Image src={urlImage} width="16" height="16" alt={name} />
          <span>{name}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
        >
          <path fill="none" d="M15 0H0v15h15z"></path>
          <path
            fill="var(--GlobalColorScheme-Text-secondaryText)"
            d="M.3 1.71L2.886 4.3a1 1 0 0 0 1.41 0l2.59-2.59A1 1 0 0 0 6.176 0H1a1 1 0 0 0-.7 1.71z"
            transform="rotate(180 5.54 4.796)"
          ></path>
        </svg>
      </button>
      <div
        className={cn(
          `h-0 min-h-0 overflow-hidden transition transition-[height] duration-300 ${isExpand ? "expand" : ""}`,
        )}
      >
        <div className="flex">
          <div className="w-full">
            <div className="flex flex-col">
              {leagues?.map((league) => {
                return <LeagueItem key={league.id} league={league} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueAllItem;
