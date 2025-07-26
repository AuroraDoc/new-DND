import "../styles/PlayerTable.css"

function statBonus(stat){
  let bonus = Math.floor((stat - 10) / 2)

  if (bonus > 0) {
    return `+ ${bonus}`
  }

  return bonus
}

function PlayerTable({player}) {
  return (
    <div className="player-table">
      <h2>{player.playername}</h2>
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
            <td>{statBonus(player.strength)}</td>
            <td>{statBonus(player.dexterity)}</td>
            <td>{statBonus(player.constitution)}</td>
            <td>{statBonus(player.intellect)}</td>
            <td>{statBonus(player.wisdom)}</td>
            <td>{statBonus(player.charisma)}</td>
          </tr>
          <tr>
            <th>AC</th>
            <td colSpan="6">{player.ac}</td>
          </tr>
          <tr>
            <th>Proficencies</th>
            <td colSpan="1.5">{player.proficency1}</td>
            <td colSpan="1.5">{player.proficency2}</td>
            <td colSpan="1.5">{player.proficency3}</td>
            <td colSpan="1.5">{player.proficency4}</td>
          </tr>

        </tbody>
      </table>

    </div>)}


export default PlayerTable;