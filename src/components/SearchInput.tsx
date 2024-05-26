"use client";

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = event.target.value;
    const newSearchParams = new URLSearchParams(searchParams);

    if (searchValue) {
      newSearchParams.set("search", searchValue);
    } else {
      newSearchParams.delete("search");
    }

    router.replace(`${pathname}?${newSearchParams}`);
  }

  return (
    <div className="flex items-center border border-[#333333] rounded-md overflow-hidden bg-[#1e1e1e] px-2">
      <SearchIcon />

      <input
        placeholder="Cerca un film..."
        defaultValue={searchParams.get("search") ?? ""}
        onChange={handleChange}
        className="w-full bg-transparent outline-none border-none p-2"
      />
    </div>
  );
}
