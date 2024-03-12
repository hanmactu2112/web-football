import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import NarBar from "./NavBar";

export default function Header() {
  return (
    <header className="border-c sticky left-0 top-0 z-[1000] flex h-[80px] w-full flex-row items-center border-b border-b-[var(--bg-input)] bg-white">
      <div className="1xl:w-[1344px] xl:w-[1240px] mx-auto my-0 flex min-h-[40px] w-full items-center lg:w-[992px]">
        <Link href="/">
          <Logo />
        </Link>
        <Search />
        <NarBar />
      </div>
    </header>
  );
}
