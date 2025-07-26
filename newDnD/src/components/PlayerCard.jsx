import { Link } from "react-router-dom"
import "../styles/PlayerCard.css"

//Need this component to be a link to the individual player pages

function PlayerCard({player}) {
  return (
    <>
      <Link to={`/inventory?userid=${player.id}`}>
        <div className="player-card">
          <div className="player-poster">
            <img src={`../images/bella.png`} alt={`Image of ${player.playerName}`} />
          </div>
          <div className="player-info">
            <h3>Player Name: {player.playername}</h3>
            <h3>Character Name: {player.charactername}</h3>
            <h3>Character Class: {player.characterclass}</h3>
            <h3>Character Race: {player.characterrace}</h3>
            <h3>Character AC: {player.ac}</h3>
          </div>

        </div>
      </Link>
    </>
  );
}

export default PlayerCard;
