import React from "react";

export default function Synonyms(props) {  

  if (props.synonyms.length !== 0) {
    return (
      <div className="Synonyms">
        <span>Synonyms: </span>
        {props.synonyms.map(function (synonyms, index) {
          return <span key={index}>{synonyms}, </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
