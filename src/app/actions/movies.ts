"use server";
import fs from "fs/promises";

export async function getMovies(search = "") {
  const allMovies = JSON.parse(
    await fs.readFile("src/data/movies.json", "utf8")
  ) as string[];

  const regex = new RegExp(search, "i");

  const filteredMovies = allMovies
    .filter((movie) => regex.test(movie))
    .slice(0, 5);

  return filteredMovies;
}
