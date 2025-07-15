import { useState } from "react";
import "./styles/App.css";
import ItemsTable from "./components/ItemsTable";
import PlayerCard from "./components/PlayerCard";
import PlayerTable from "./components/PlayerTable"
import { mccoy, dennis, mak, bella } from "../players" 

let players = [mccoy, dennis, mak, bella]


function App() {

  return <>
    <div>
      <div className="players-grid">
        {players.map(player => <PlayerCard player={player} key={player.playerName}/>)}
      </div>
      <div className="player-tables">
        {players.map(player => <PlayerTable player={player} key={player.playerName}/>)}
      </div>

      <ItemsTable player={} ></ItemsTable>

    </div>
    </>
}

export default App;
