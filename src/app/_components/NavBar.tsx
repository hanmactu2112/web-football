import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Logo from "./Logo";

const NarBar = () => {
  return (
    <div className="flex flex-row items-center gap-6 xl:gap-10">
      <div className="text-[19px] font-bold">
        <Link className="whitespace-nowrap" href="/news">
          New
        </Link>
      </div>
      <div className="text-[19px] font-bold">
        <Link className="whitespace-nowrap" href="/about">
          About Us
        </Link>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Image
            className="cursor-pointer"
            src="/favicon.ico"
            alt="action-setting"
            width="16"
            height="16"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 rounded-[20px] p-5">
          <DropdownMenuGroup>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Theme</DropdownMenuItem>
            <DropdownMenuItem>Language</DropdownMenuItem>
            <DropdownMenuItem>Sign In</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NarBar;
