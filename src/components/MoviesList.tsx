type Props = {
  movies: string[];
};

export function MoviesList({ movies }: Props) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie}>{movie}</li>
      ))}
    </ul>
  );
}
