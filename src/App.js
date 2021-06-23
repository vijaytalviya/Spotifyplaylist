import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";

import "./app.scss";

function App() {
  const [track, setTrack] = useState([]);
  useEffect(() => {
    // Api call for retrieving token
    axios("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer(
            "cea1c366795e4259ac8515675fbd53fe" +
              ":" +
              "72924d3c21794062bf09d523cae671f7"
          ).toString("base64"),
      },
      data: "grant_type=client_credentials",
    })
      .then((tokenresponse) => {
        // Api call for retrieving  data
        axios(
          "https://api.spotify.com/v1/browse/featured-playlists?country=IN",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + tokenresponse.data.access_token,
            },
          }
        )
          .then((trackresponse) => {
            setTrack(trackresponse.data.playlists.items);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="app">
      <LeftPane data={track} />
      <RightPane data={track} />
    </div>
  );
}

export default App;
