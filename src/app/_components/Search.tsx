import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
  };

  return (
    <form
      onSubmit={() => {}}
      className="flex-[1] pl-0 lg:flex lg:items-center lg:pl-[50px]"
    >
      <div>
        <input
          value={value}
          type="text"
          placeholder="Search"
          onChange={(e) => setValue(e.target.value.trim())}
          className="h-10 rounded-3xl border-none bg-[#f0f0f0] bg-[url('/ic_search_grey@3x.webp')] bg-[length:14px] bg-[1.25rem_center] bg-no-repeat pl-14 text-sm outline-none placeholder:text-muted-foreground focus:bg-[url('/ic_search_black@3x.webp')] focus:shadow-none focus:outline-none lg:w-[356px]"
        />
        <div id="react-autowhatever-search-input" className=""></div>
      </div>
    </form>
  );
};

export default Search;
