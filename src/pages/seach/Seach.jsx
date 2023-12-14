import React, { useState } from "react";

import Nav from "../browse/Nav";
import SearchForm from "./SearchForm";
import SeachResults from "./SearchResults";

const Search = () => {
  const [inputData, setInputData] = useState("");
  function saveInputValueHandler(enteredInputData) {
    setInputData(enteredInputData);
  }
  console.log(inputData);

  return (
    <React.Fragment>
      <Nav />
      <SearchForm onSaveInputValue={saveInputValueHandler} />
      <SeachResults inputValue={inputData} />
    </React.Fragment>
  );
};

export default Search;
