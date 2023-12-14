import { useState, useEffect } from "react";

function useYoutube(url) {
  const [youtubeData, setYoutubeData] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const respon = await fetch(url);

        const data = await respon.json();
        console.log(data);

        const movieVideosData = data.results.filter((movie) => {
          if (movie.type === "Trailer") {
            return movie;
          } else if (movie.type === "Tesaser") {
            return movie;
          }
        });

        setYoutubeData(movieVideosData[0]);
      } catch (err) {
        console.log(err);
        setYoutubeData({});
      }
    }
    fetchData();
  }, [url]);
  return youtubeData;
}

export default useYoutube;
