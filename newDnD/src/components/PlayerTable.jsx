```Structure: 
{
    playerName: "name",
    strangth: int,
    dexterity: int,
    constitution: int,
    intellegence: int,
    wisdom: int,
    charisma: int,
    ac: int,
    maxEnergy: int,
    health: int,

}
```;
function PlayerTable() {
  return (
    <>
      <table>
        <tr>
          <th>Stat</th>
          <td>Strength</td>
          <td>Dexterity</td>
          <td>Constitution</td>
          <td>Intelligance</td>
          <td>Wisodm</td>
          <td>Charisma</td>
        </tr>
        <tr>
          <th>Stat Level</th>
          <td>18</td>
          <td>20</td>
          <td>14</td>
          <td>20</td>
          <td>10</td>
          <td>9</td>
        </tr>
        <tr>
          <th>Stat Bonus</th>
          <td>+4</td>
          <td>+5</td>
          <td>+2</td>
          <td>+5</td>
          <td>0</td>
          <td>-1</td>
        </tr>
      </table>

      <table>
        <tr>
          <th>AC</th>
          <th>Max Energy</th>
        </tr>
        <tr>
          <td>15</td>
          <td>152</td>
        </tr>
      </table>

      <h3>Health: 19/19</h3>

      <table>
        <tr>
          <th>Weapons</th>
          <th>Type</th>
          <th>Attack(1H)</th>
          <th>Attack(2H)</th>
          <th>Throw</th>
          <th>Range(Short)</th>
          <th>Range(Long)</th>
        </tr>
        <tr>
          <td>Dwerva</td>
          <td>Sword</td>
          <td>2-D4</td>
          <td>2-D6</td>
          <td>1-D4</td>
          <td>20</td>
          <td>60</td>
        </tr>
      </table>

      <h3>Inventory</h3>
      <table>
        <tr></tr>
      </table>
    </>
  );
}

export default PlayerTable;
