import { Suspense } from "react";
import { getMovies } from "../actions/movies";
import { SuspendedMoviesList } from "@/components/SuspendedMoviesList";
import { SearchInputWithTransition } from "@/components/SearchInputWithTransition";

type PageProps = {
  searchParams: {
    search?: string;
  };
};

export default async function MoviesWithSuspensePage({
  searchParams,
}: PageProps) {
  const searchValue = searchParams.search ?? "";

  return (
    <div className="content">
      <SearchInputWithTransition />
      <SuspendedMoviesList search={searchValue} />
    </div>
  );
}
