import { SearchInput } from "@/components/SearchInput";
import { Suspense } from "react";
import fs from "fs/promises";
import { MoviesList } from "@/components/MoviesList";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[600px] flex items-center gap-4 hover:underline justify-between border border-[#333333] rounded-md bg-[#1e1e1e] p-2">
      {children}
      <ArrowRightIcon />
    </div>
  );
}

export default async function Home() {
  return (
    <div className="flex flex-col gap-2 w-full items-center">
      <Link href="/movies-with-api">
        <Card>
          <h3 className="text-2xl">Movies with API</h3>
        </Card>
      </Link>
      <Link href="/movies-without-api">
        <Card>
          <h3 className="text-2xl">Movies without API</h3>
        </Card>
      </Link>
      <Link href="/movies-with-suspense">
        <Card>
          <h3 className="text-2xl">Movies with Suspense</h3>
        </Card>
      </Link>
    </div>
  );
}
