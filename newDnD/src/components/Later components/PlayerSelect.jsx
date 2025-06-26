// Maybe we dont need this? Just click on the player cards?

function PlayerSelect(players) {
  return (
    <>
      <select name="playerSelect" id="playerSelect">
        {players.map((currPlayer) => (
          <option name={currPlayer} id={currPlayer}>
            {currPlayer}
          </option>
        ))}
      </select>
    </>
  );
}

export default PlayerSelect;
