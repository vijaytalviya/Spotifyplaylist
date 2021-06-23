import React, { useState, useEffect } from "react";
import "./rightpane.scss";
import PlayList from "./PlayList";
const RightPane = (props) => {
  const [data, setData] = useState([]);
  const drop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const track = props.data.filter((t) => {
      return t.id === id;
    });
    setData([...data, ...track]);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const playlist = JSON.parse(localStorage.getItem("playlist"));
    if (playlist) {
      setData(playlist);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("playlist", JSON.stringify(data));
  }, [data]);

  return (
    <div className="rightpane">
      <h1>Playlist Collection</h1>
      <div className="container" onDrop={drop} onDragOver={dragOver}>
        <div className="track">
          {data.length === 0 && <p className="empty">Drop Playlist</p>}
          {data.map((track) => {
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
    </div>
  );
};

export default RightPane;
