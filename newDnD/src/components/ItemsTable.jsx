import { useState } from "react";

function ItemsTable({player}) {

console.log(player.inventory)

let playerInventory = player.inventory

//let [playerInv, setPlayerInv] = useState(playerInventory)

  return (
    <>
      <form action="">
        <input type="number" placeholder="First 3 Digits"/>
        <input type="number" placeholder="Last 3 Digits"/>
        <button type="submit">Submit</button>
      </form>
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
        <tbody>
            {playerInventory.map(item => {
              return (
              <tr>
                <td>{item.itemName}</td>
                <td>{item.shortDesc}</td>
                <td>{item.longDesc}</td>
                <td>{item.goldBuy}</td>
                <td>{item.goldSell}</td>
                <td>{item.quantity}</td>
              </tr>
            )})}
        </tbody>
      </table>
    </>
  );
}

export default ItemsTable;
