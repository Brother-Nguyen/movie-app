import { useState, useEffect } from "react";

function useHttp(url) {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const respon = await fetch(`https://api.themoviedb.org/3/${url}`);

        const data = await respon.json();

        setMovieData(data.results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [url]);

  return movieData;
}
export default useHttp;
