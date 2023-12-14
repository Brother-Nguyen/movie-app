import { useState, useEffect } from "react";
import React from "react";
import useHttp from "../../customHook/use-Http";
import useYoutube from "../../customHook/use-youtube";
import MovieDetail from "./MovieDetail";

import "./MovieList.css";

const API_KEY = "01aaa8e5c04d1cf165c358fce3dffefb";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

function MovieList(prop) {
  const [movieClick, setMovieClick] = useState({});
  const [movieIsClick, setmovieIsClick] = useState(false);
  // const [youtubeData, setYoutubeData] = useState("");

  const fetchYoutube = `https://api.themoviedb.org/3/movie/${movieClick.id}/videos?api_key=${API_KEY}`;

  // lẫy dữ liệu movie data
  const originalMovies = useHttp(requests.fetchNetflixOriginals);
  const trendingMovies = useHttp(requests.fetchTrending);
  const topRateMovies = useHttp(requests.fetchTopRated);
  const actionMovies = useHttp(requests.fetchActionMovies);
  const comedyMovies = useHttp(requests.fetchComedyMovies);
  const horrorMovies = useHttp(requests.fetchHorrorMovies);
  const romanceMovies = useHttp(requests.fetchRomanceMovies);
  const documentaries = useHttp(requests.fetchDocumentaries);

  const youtubeData = useYoutube(fetchYoutube);

  // render movie
  const renderMovie = (title, data) => {
    return (
      <div className="movie-lists">
        <h3>{title}</h3>
        <div className={`movie-list`}>
          {data.map((movie) => (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original${
                title === "" ? movie.poster_path : movie.backdrop_path
              }`}
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
    <React.StrictMode>
      <div>
        {renderMovie("", originalMovies)}
        {renderMovie("Xu hướng", trendingMovies)}
        {renderMovie("Xếp hạng cao", topRateMovies)}
        {renderMovie("Hành động", actionMovies)}
        {renderMovie("Hài", comedyMovies)}
        {renderMovie("Kinh dị", horrorMovies)}
        {renderMovie("Lãng mạng", romanceMovies)}
        {renderMovie("Tài liệu", documentaries)}
      </div>
      {movieIsClick && (
        <MovieDetail movie={movieClick} youtubeData={youtubeData} />
      )}
    </React.StrictMode>
  );
}

export default MovieList;
