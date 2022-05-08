import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.keyword);
  const [results, setResults] = useState(null);
  const [load, setLoad] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    setLoad(true);
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function getValue(event) {
    setKeyword(event.target.value);
  }

  if (load) {
    return (
      <div className="Dictionary">
        <section className="search-form">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search..."
              autoFocus={true}
              onChange={getValue}
              className="form-control form-control-sm"
            />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    search();
    return null;
  }
}
