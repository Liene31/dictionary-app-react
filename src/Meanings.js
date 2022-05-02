import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h6>{props.meanings.partOfSpeech}</h6>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
