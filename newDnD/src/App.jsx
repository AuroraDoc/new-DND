import { useEffect, useState } from "react";
import { Route, Routes, } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import PlayerInventory from "./pages/PlayerInventory"


function App() {
  const [playerData, setPlayerData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/players")
      .then((res) => res.json())
      .then((players) => setPlayerData(players))
      .catch((err) => console.error("Getting data from db failed:", err))
  }, [])

  return <>
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home players={playerData}/>} />
          
          {playerData.map(player => <Route path={player.playername} element={<PlayerInventory player={player}/>}/>)}
        </Routes>
      </main>

    </div>
    </>
}

export default App;
