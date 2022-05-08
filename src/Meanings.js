import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h6>{props.meanings.partOfSpeech}</h6>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <Example example={definition.example} />
          </div>
        );
      })}

      <Synonyms synonyms={props.meanings.synonyms} />
    </div>
  );
}
