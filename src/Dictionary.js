import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.keyword);
  const [results, setResults] = useState(null);
  const [load, setLoad] = useState(null);
  const [photo, setPhoto] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    setLoad(true);
  }

  function handleResponsePhotos(response) {
    setPhoto(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);

    let pexelsKey = `563492ad6f91700001000001d6ad3ffbc140485cb45c77f420f8914d`;
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsKey}` } })
      .then(handleResponsePhotos);
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
        <Photos photos={photo} />
      </div>
    );
  } else {
    search();
    return null;
  }
}
