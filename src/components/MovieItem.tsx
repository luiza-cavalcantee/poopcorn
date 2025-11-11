import type { Movie } from "../types/movies";

interface MovieItemProps {
  movie: Movie;
  onSelectMovie: (id: string) => void;
}

export default function MovieItem({ movie, onSelectMovie }: MovieItemProps) {
  return (
    <li key={movie.imdbID} onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.year}</span>
        </p>
      </div>
    </li>
  );
}
