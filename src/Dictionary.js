import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault(alert(keyword));
  }

  function getValue(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary" onSubmit={handleSubmit}>
      <form>
        <input type="search" placeholder="Search..." onChange={getValue} />
      </form>
    </div>
  );
}
