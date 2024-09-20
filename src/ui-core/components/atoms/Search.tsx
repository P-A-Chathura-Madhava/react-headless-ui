// React Icons
import { IoSearchSharp } from "react-icons/io5";

// Headless UI Components
import { Input } from "@headlessui/react";
import clsx from "clsx";

function Search() {
  return (
    <div className="flex items-center justify-center gap-2">
      <IoSearchSharp className="text-2xl" />
      <Input
        className={clsx(
          "block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
        )}
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
