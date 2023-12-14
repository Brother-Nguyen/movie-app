import "./MovieDetail.css";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

function MovieDetail(prop) {
  const [movieYoutubeData, setMovieYoutubeData] = useState([]);

  let releaseDate = prop.movie.release_date;
  let movieTitle = prop.movie.title;

  if (!prop.movie.release_date) {
    releaseDate = prop.movie.first_air_date;
  }

  if (prop.movie.first_air_date === "") {
    releaseDate = "Unknow";
  }
  if (!prop.movie.title) {
    movieTitle = prop.movie.name;
  }

  let renderVideo = (
    <iframe
      width="100%"
      height="400"
      src={`https://www.youtube.com/embed/${prop.youtubeData?.key}`}
    ></iframe>
  );

  if (!prop.youtubeData?.key) {
    renderVideo = (
      <img
        className="img-detail"
        src={`https://image.tmdb.org/t/p/original${prop.movie?.backdrop_path}`}
      />
    );
  }

  // if (prop.youtubeData === undefined) {
  //   renderVideo = <p>khong tim thay video</p>;
  // }

  return (
    <div className="movie-detail">
      <div className="movie-detail__info">
        <h1>{movieTitle}</h1>
        <div>
          <p>Release date: {releaseDate}</p>
          <p>Vote: {prop.movie.vote_average}/10</p>
        </div>
        <p>{prop.movie.overview}</p>
      </div>
      {/* <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${prop.youtubeData?.key}`}
      ></iframe> */}
      {renderVideo}
    </div>
  );
}

export default MovieDetail;
