import axios from "axios";
import { useEffect, useState } from "react";
import "./SearchFilter.css";

const SearchFilter = ({ setUsers }) => {
  const [query, setQuery] = useState("");
  let response;

  useEffect(() => {
    const loadUseres = async () => {
      response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?q=${query}`
      );
      setUsers(response.data);
    };
    loadUseres();
  }, [query]);

  const searchChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search"
      value={query}
      onChange={searchChangeHandler}
    />
  );
};

export default SearchFilter;
