import React from "react";
import "./Searchbox.css";

function SearchBox({ placeHolder, event }) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeHolder}
      onChange={event}
    />
  );
}

export default SearchBox;
