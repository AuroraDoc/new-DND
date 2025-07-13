import "../styles/PlayerTable.css"

function PlayerTable({player}) {
  return (
    <div className="player-table">
      <h2>{player.playerName}</h2>
      <table>
        <thead>
          <tr>
            <th>Stat</th>
            <td>Strength</td>
            <td>Dexterity</td>
            <td>Constitution</td>
            <td>Intelligance</td>
            <td>Wisodm</td>
            <td>Charisma</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Stat Level</th>
            <td>{player.strength}</td>
            <td>{player.dexterity}</td>
            <td>{player.constitution}</td>
            <td>{player.intellect}</td>
            <td>{player.wisdom}</td>
            <td>{player.charisma}</td>
          </tr>
          <tr>
            <th>Stat Bonus</th>
            <td>{Math.floor((player.strength - 10) / 2)}</td>
            <td>{Math.floor((player.dexterity - 10) / 2)}</td>
            <td>{Math.floor((player.constitution -10) / 2)}</td>
            <td>{Math.floor((player.intellect - 10) / 2)}</td>
            <td>{Math.floor((player.wisdom - 10) / 2)}</td>
            <td>{Math.floor((player.charisma - 10) / 2)}</td>
          </tr>

          <tr>
            <th>AC</th>
            <td colSpan="6">{player.AC}</td>
          </tr>
        </tbody>
      </table>

    </div>)}


export default PlayerTable;