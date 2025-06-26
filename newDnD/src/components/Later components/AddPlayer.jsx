import { useState } from "react";
//Done?
// Add basic player stats
let players = [];

let [playerName, setPlayerName] = useState("");
let [characterName, setCharacterName] = useState("");
let [characterRace, setCharacterRace] = useState("");
let [characterClass, setCharacterClass] = useState("");
let [characterAC, setCharacterAC] = useState(0);

function handlePlayerSubmit(e) {
  e.preventDefault();
  let currPlayer = {
    playerName: playerName,
    characterName: characterName,
    characterClass: characterClass,
    characterRace: characterRace,
    characterAC: characterAC,
  };

  players.push(currPlayer);
}

function AddPlayer() {
  return (
    <>
      <div className="addPlayer">
        <form onSubmit={handlePlayerSubmit}>
          <input
            type="text"
            placeholder="Player Name..."
            value={playerName}
            onChange={(e) => {
              setPlayerName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Character Name..."
            value={characterName}
            onChange={(e) => {
              setCharacterName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Character Class..."
            value={characterClass}
            onChange={(e) => {
              setCharacterClass(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Character Race..."
            value={characterRace}
            onChange={(e) => {
              setCharacterRace(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Character AC..."
            value={characterAC}
            onChange={(e) => {
              setCharacterAC(e.target.value);
            }}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default AddPlayer;
