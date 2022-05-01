import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault(alert(keyword));

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function getValue(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary" onSubmit={handleSubmit}>
      <form>
        <input
          type="search"
          placeholder="Search..."
          autoFocus={true}
          onChange={getValue}
        />
      </form>
    </div>
  );
}
