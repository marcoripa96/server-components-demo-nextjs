import { SearchInput } from "@/components/SearchInput";
import { MoviesList } from "@/components/MoviesList";
import { getMovies } from "../actions/movies";
import { sleep } from "@/utils/utils";

type PageProps = {
  searchParams: {
    search?: string;
  };
};

export default async function MoviesWithoutApiPage({
  searchParams,
}: PageProps) {
  const searchValue = searchParams.search ?? "";

  const filteredMovies = await getMovies(searchValue);

  return (
    <div className="content">
      <SearchInput />
      <MoviesList movies={filteredMovies} />
    </div>
  );
}
