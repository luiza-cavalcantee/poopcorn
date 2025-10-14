import NavBar from "./components/NavBar";
import Main from "./components/Main";
import type { Movie, WatchedMovieType } from "./types/movies";
import { useState } from "react";
import { tempMovieData } from "./mocks/tempMovieData";
import SearchBar from "./components/SearchBar";
import NumResults from "./components/NumResults";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import Summary from "./components/Summary";
import WatchedList from "./components/WatchedList";
import { tempWatchedData } from "./mocks/tempWatchedData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar>
        <SearchBar />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <>
            <Summary watched={watched} />
            <WatchedList watched={watched} />
          </>
        </Box>
      </Main>
    </>
  );
}
