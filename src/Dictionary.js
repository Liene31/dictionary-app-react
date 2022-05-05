import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function getValue(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary" onSubmit={handleSubmit}>
      <section className="search-form">
        <form>
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
}
