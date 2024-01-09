import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Browse from "./pages/browse/Browse";
import Search from "./pages/seach/Seach";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie-app" element={<Browse />}>
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
