import React from "react";
import "./playlist.scss";

const PlayList = ({ image, name, description, trackId }) => {
  const dragStart = (e) => {
    e.dataTransfer.setData("id", trackId);
    // const target = e.target;
    // e.dataTransfer.setData("id", target.id);
  };
  const dragend = (e) => {};
  return (
    <div
      key={trackId}
      className="playlist"
      draggable
      onDragStart={dragStart}
      onDragEnd={dragend}
    >
      <div className="img">
        <img src={image[0].url} alt={name} />
      </div>
      <div className="name">{name}</div>
      <p>{description}</p>
    </div>
  );
};

export default PlayList;
