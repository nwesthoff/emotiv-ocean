import React, { useState, useEffect } from "react";
import { Ocean } from "../components/Ocean/Ocean";
import { calmRange } from "../components/Ocean/weather";
import { Sound } from "../components/Sound/Sound";

const [min, max] = calmRange;

function Calm({ user, notion }) {
  const [calm, setCalm] = useState(0.3);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    if (!ws) {
      return;
    }

    ws.onopen = function (ev) {
      console.log(ev);
    };

    ws.onmessage = (event) => {
      const focus = JSON.parse(event.data)?.com?.[1];
      // const avgFocus = averageScoreBuffer()(focus);
      // console.log(avgFocus);
      setCalm(1 - focus);
    };

    return () => {
      ws.close();
    };
  }, [user, notion]);

  return (
    <main>
      {
        <meter
          style={{ position: "relative", zIndex: 4 }}
          value={calm}
          min={min}
          max={max}
        />
      }
      <Sound calm={calm} calmRange={calmRange}></Sound>
      <Ocean calm={calm} />
    </main>
  );
}

export default Calm;
