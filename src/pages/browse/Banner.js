import { useState, useEffect } from "react";
import "./Banner.css";
import Nav from "./Nav";

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

function Banner() {
  const [bannerMovie, setBannerMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const respon = await fetch(
          `https://api.themoviedb.org/3/${requests.fetchNetflixOriginals}`
        );

        const data = await respon.json();

        setBannerMovie(
          data.results[Math.floor(Math.random() * data.results.length - 1)]
        );
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${bannerMovie?.backdrop_path}')`,
      }}
    >
      <div className="banner-info">
        <h1>
          {bannerMovie?.name || bannerMovie.tilte || bannerMovie?.original_name}
        </h1>
        <div>
          <button>Play</button>
          <button>My List</button>
        </div>
        <p>{bannerMovie?.overview}</p>
      </div>
    </div>
  );
}

export default Banner;
