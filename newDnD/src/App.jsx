import { useState } from "react";
import { Route, Routes, } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import PlayerInventory from "./pages/PlayerInventory"
import { mccoy, dennis, mak, bella } from "../players" 
import pg from "pg";


const db = new pg.Client({
  user: process.env.REACT_APP_dbUser,
  host: process.env.REACT_APP_dbHost,
  database: process.env.REACT_APP_database,
  password: process.env.REACT_APP_dbPassword,
  port: process.env.REACT_APP_dbPort 

})

db.connect()

let playerData = db.query("SELECT * FROM dndusers")


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
