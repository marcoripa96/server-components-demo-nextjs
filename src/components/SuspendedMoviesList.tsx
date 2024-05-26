import { getMovies } from "@/app/actions/movies";
import { sleep } from "@/utils/utils";
import { Suspense } from "react";

type Props = {
  search?: string;
};

async function AsyncMoviesList({ search = "" }: Props) {
  // await sleep(2000);

  const filteredMovies = await getMovies(search);

  return (
    <ul className="group-has-[[is-pending]]:animate-pulse">
      {filteredMovies.map((movie) => (
        <li key={movie}>{movie}</li>
      ))}
    </ul>
  );
}

export function SuspendedMoviesList({ search }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AsyncMoviesList search={search} />
    </Suspense>
  );
}
