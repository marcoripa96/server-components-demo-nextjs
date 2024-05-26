import { NextRequest } from "next/server";
import fs from "fs/promises";

export async function GET(request: NextRequest) {
  const searchValue = request.nextUrl.searchParams.get("search") ?? "";

  const allMovies = JSON.parse(
    await fs.readFile("src/data/movies.json", "utf8")
  ) as string[];

  const regex = new RegExp(searchValue, "i");

  const filteredMovies = allMovies
    .filter((movie) => regex.test(movie))
    .slice(0, 5);

  return Response.json(filteredMovies);
}
