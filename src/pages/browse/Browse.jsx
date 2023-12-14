import React from "react";

import Banner from "./Banner";
import MovieList from "./MovieList";
import Nav from "./Nav";

function Browse() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <MovieList />
    </div>
  );
}

export default Browse;
