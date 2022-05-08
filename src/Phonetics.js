import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  const [play, setPlay] = useState(false);

  function handleClick() {
    setPlay(true);
  }

  if (props.phonetics.text && props.phonetics.audio) {
    return (
      <div className="Phonetics">
        <p>{props.phonetics.text}</p>
        <button onClick={handleClick}>
          <i className="fa fa-volume-up"></i>
        </button>
        {play && (
          <ReactAudioPlayer
            src={props.phonetics.audio}
            autoPlay
            onEnded={() => setPlay(false)}
          />
        )}
      </div>
    );
  } else {
    return null;
  }
}
