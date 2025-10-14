import type { WatchedMovieType } from "../types/movies";
import WatchedMovie from "./WatchedMovie";

type WatchedListProps = {
  watched: WatchedMovieType[];
};

export default function WatchedList({ watched }: WatchedListProps) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
