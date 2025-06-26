import { useState } from "react";

function GoldCounter() {
  let [gold, setGold] = useState(0);

  return (
    <div claasName="gold">
      <h1>{gold}</h1>
    </div>
  );
}

export default GoldCounter;
