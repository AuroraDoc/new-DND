import PlayerCard from "../components/PlayerCard";
import PlayerTable from "../components/PlayerTable"

function Home({players}){
    return <>
      <div className="players-grid">
        {players.map(player => <PlayerCard player={player} key={player.playerName}/>)}
      </div>
      <div className="player-tables">
        {players.map(player => <PlayerTable player={player} key={player.playerName}/>)}
      </div>
    </>
}


export default Home;