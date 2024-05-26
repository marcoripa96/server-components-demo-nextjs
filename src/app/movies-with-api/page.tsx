import { MoviesList } from "@/components/MoviesList";
import { SearchInput } from "@/components/SearchInput";

type PageProps = {
  searchParams: {
    search?: string;
  };
};

export default async function MoviesWithApiPage({ searchParams }: PageProps) {
  const searchValue = searchParams.search ?? "";

  const response = await fetch(
    `http://localhost:3000/api/movie${
      searchValue ? `?search=${searchValue}` : ""
    }`
  );

  const movies = (await response.json()) as string[];

  return (
    <div className="content">
      <SearchInput />
      <MoviesList movies={movies} />
    </div>
  );
}
