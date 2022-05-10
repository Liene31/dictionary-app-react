import React from "react";
import Phonetics from "./Phonetics";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {  
  if (props.results) {
    return (
      <div className="Results">
        <section className="phonetics">
          <h3>{props.results.word}</h3>
          {props.results.phonetics.map(function (phonetics, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meanings meanings={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
