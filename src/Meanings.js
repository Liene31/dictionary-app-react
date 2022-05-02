import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  console.log(props);
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

      <Synonyms synonyms={props.meanings.synonyms} />
    </div>
  );
}
