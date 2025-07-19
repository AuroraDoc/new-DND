import { useState } from "react";
import { Route, Routes, } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import PlayerInventory from "./pages/PlayerInventory"
import ItemsTable from "./components/ItemsTable";
//const sqlite3 = require("sqlite3").verbose()

import { mccoy, dennis, mak, bella } from "../players" 

let players = [mccoy, dennis, mak, bella]


function App() {

  return <>
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home players={players}/>} />

          {players.map(player => <Route path={player.playerName} element={<PlayerInventory player={player}/>}/>)}
        </Routes>
      </main>

    </div>
    </>
}

export default App;
