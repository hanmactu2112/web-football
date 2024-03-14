import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeagueItem = ({
  league,
}: {
  league: { id: number; name: string; localizedName: string; pageUrl: string };
}) => {
  const { id, name, localizedName, pageUrl } = league;
  const urlImage = `https://images.fotmob.com/image_resources/logo/leaguelogo/${id}.png`;
  return (
    <Link
      className="flex min-h-[42px] flex-row items-center gap-4 p-[12px_24px] text-[14px] hover:bg-[#eaeaea]"
      href={pageUrl}
    >
      <div className="h-4 w-4">
        <Image src={urlImage} alt={name} width="16" height="16" />
      </div>
      <span className="text-[#9f9f9f]">{name}</span>
    </Link>
  );
};

export default LeagueItem;
