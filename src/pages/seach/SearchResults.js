import { useState } from "react";
import React from "react";
import "./SeachResults.css";
import useHttp from "../../customHook/use-Http";
import useYoutube from "../../customHook/use-youtube";
import MovieDetail from "../browse/MovieDetail";

const API_KEY = "01aaa8e5c04d1cf165c358fce3dffefb";

function SeachResults(prop) {
  const [movieClick, setMovieClick] = useState({});
  const [movieIsClick, setmovieIsClick] = useState(false);

  const fetchSearch = `/search/movie?query=${prop.inputValue}&api_key=${API_KEY}&language=en-US`;
  
  const fetchYoutube = `https://api.themoviedb.org/3/movie/${movieClick.id}/videos?api_key=${API_KEY}`;

  const searchMovieData = useHttp(fetchSearch);
  const youtubeData = useYoutube(fetchYoutube);
  console.log();

  const renderMovie = (title, data) => {
    return (
      <div className="movie-lists">
        <h3>{title}</h3>
        <div className="movie-list search">
          {data.map((movie) => (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              onClick={() => {
                setMovieClick(movie);
                setmovieIsClick((pre) => !pre);
                if (movie !== movieClick) {
                  setmovieIsClick(true);
                }
                console.log(movie);
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {renderMovie("Search result", searchMovieData)}

      {movieIsClick && (
        <MovieDetail movie={movieClick} youtubeData={youtubeData} />
      )}
    </React.Fragment>
  );
}

export default SeachResults;
