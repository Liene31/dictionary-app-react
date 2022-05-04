import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics.audio);
  return (
    <div className="Phonetics">
      <p>{props.phonetics.text}</p>
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
    </div>
  );
}
