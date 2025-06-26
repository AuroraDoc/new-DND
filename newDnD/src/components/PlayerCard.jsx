//Need this component to be a link to the individual player pages

function PlayerCard(player) {
  return (
    <>
      <div>
        <h3>Player Name: {player.playerName}</h3>
        <h3>Character Name: {player.characterName}</h3>
        <h3>Character Class: {player.characterClass}</h3>
        <h3>Character Race: {player.characterRace}</h3>
        <h3>Character AC: {player.AC}</h3>
      </div>
    </>
  );
}

export default PlayerCard;
