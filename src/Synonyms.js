import React from "react";
import "./Synonyms.css"

export default function Synonyms(props) {  

  if (props.synonyms.length !== 0) {
    return (
      <div className="Synonyms">
        <span className="synonym">Synonyms: </span>
        {props.synonyms.map(function (synonyms, index) {
          return <span className="synonym-example" key={index}>{synonyms} </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
