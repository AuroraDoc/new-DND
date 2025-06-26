```Structure: 
{
player1: [{Item Name: "...", short_desc: "...", long_desc": "...", buy: int, sell: int, quantity: int}],
player2: [{Item Name: "...", short_desc: "...", long_desc": "...", buy: int, sell: int, quantity: int}],
...
}

```;
function ItemsTable(playerItems) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Short Description</th>
            <th>Long Description</th>
            <th>Buy (Gold)</th>
            <th>Sell (Gold)</th>
            <th>Quantity</th>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default ItemsTable;
