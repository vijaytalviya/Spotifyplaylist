import React from "react";
import "./leftpane.scss";
import PlayList from "./PlayList";
const LeftPane = (props) => {
  return (
    <div className="leftpane">
      <h1>All Playlist</h1>
      <div className="track">
        {props.data.map((track) => {
          return (
            <PlayList
              key={track.id}
              name={track.name}
              description={track.description}
              image={track.images}
              trackId={track.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LeftPane;
