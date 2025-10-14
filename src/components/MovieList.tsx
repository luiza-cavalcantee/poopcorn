import type { Movie } from "../types/movies";
import MovieItem from "./MovieItem";

type MovieListProps = {
  movies: Movie[];
};

export default function MovieList({ movies }: MovieListProps) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbID}/>
      ))}
    </ul>
  );
}
