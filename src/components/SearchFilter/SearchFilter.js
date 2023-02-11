import { useState } from "react";
import "./SearchFilter.css";

const SearchFilter = () => {
  const [query, setQuery] = useState("");

  const searchChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  console.log(query);
  return (
    <form className="align-items-end">
      <input type="text" placeholder="Search" onClick={searchChangeHandler} />
      <button type="submit" className="btn btn-success btn-sm">
        Search
      </button>
    </form>
  );
};

export default SearchFilter;
