import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeagueListItem = ({
  data,
}: {
  data: { id: number; name: string; localizedName: string; pageUrl: string };
}) => {
  const { id, name, localizedName, pageUrl } = data;
  const imgUrl = `https://images.fotmob.com/image_resources/logo/leaguelogo/${id}.png`;
  return (
    <Link
      className="flex min-h-9 flex-row items-center gap-4 p-[12px_24px] text-xs hover:bg-[#eaeaea]"
      href={pageUrl}
    >
      <div className="h-4 w-4">
        <Image src={imgUrl} alt={name} loading="lazy" width="16" height="16" />
      </div>
      <span>{name}</span>
    </Link>
  );
};

export default LeagueListItem;
