import React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { YouTubeEmbed } from "@next/third-parties/google";

const Ads = ({ type }: { type: string }) => {
  return (
    <aside>
      <div className="3xl:block 3xl:sticky 3xl:px-4 3xl:top-[96px] sticky hidden py-4 ">
        {/* <YouTubeEmbed videoid="vCOSTG10Y4o?si=zNOvRvzIiDO70uWa" height={400} /> */}
      </div>
    </aside>
  );
};

export default Ads;
