import { useState } from "react";

function ItemsTable({player}) {

console.log(player.inventory)

let playerInventory = player.inventory

//let [playerInv, setPlayerInv] = useState(playerInventory)
let [idNum1, setIdNum1] = useState()
let [idNum2, setIdNum2] = useState()

function handleSubmit(e) {
  e.preventDefault()
  setIdNum1()
  setIdNum2()
}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="First 3 Digits" value={idNum1} onChange={setIdNum1}/>
        <input type="number" placeholder="Last 3 Digits" value={idNum2} onChange={setIdNum2}/>
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
