import { useState } from "react";



function GoldCounter() {
  let [gold, setGold] = useState("");

  function handleSubmit(){
  e.preventDefault()
  
}

  return (
    <div claasName="gold">
      <h1>{gold}</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" value={gold} onChange={(e) => {setGold(Number(e.target.value))}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GoldCounter;
