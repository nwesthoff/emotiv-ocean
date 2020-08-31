import React, { useState, useEffect } from "react";
import { Ocean } from "../components/Ocean/Ocean";
import { calmRange } from "../components/Ocean/weather";
import { averageScoreBuffer, clamp } from "../utils";
// import { Sound } from "../components/Sound";

const [min, max] = calmRange;

function Calm({ user, notion }) {
  const [calm, setCalm] = useState(0.8);
  const [wsClient, setWsClient] = useState<WebSocket>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setWsClient(ws);

    if (!wsClient) {
      return;
    }

    wsClient.onopen = function (ev) {
      console.log(ev);
    };

    wsClient.onmessage = (event) => {
      console.log(event.data);
    };

    return () => {
      wsClient.close();
    };
  }, [user, notion]);

  return (
    <main>
      {/* <meter value={calm} min={min} max={max} /> */}
      {/* <Sound calm={calm} calmRange={calmRange}></Sound> */}
      <Ocean calm={calm} />
    </main>
  );
}

export default Calm;
