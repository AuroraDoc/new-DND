import { useEffect, useState } from "react";

function ItemsTable({playerId}) {

  const [playerInventory, setPlayerInventory] = useState([])
  const [idNum, setIdNum] = useState("")
  const [quantity, setQuantity] = useState("")

  useEffect(() => {
    if(!playerId) return

    fetch(`http://localhost:3000/inventory?userid=${playerId}`)
      .then((res) => res.json())
      .then((playerInv) => setPlayerInventory(playerInv))
      .catch((err) => console.error("Getting data from db failed:", err))
  }, [playerId])

  async function handleSubmit(e) {
    e.preventDefault()
    try{
      let res = await fetch('http://localhost:3000/updateInventory', {
        
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          userid: playerId,
          itemid: idNum,
          quantity: quantity
        })
      
      })
    } catch(e){
      console.error('Error with sending item to updateInventory:', e)  
    }
    fetch(`http://localhost:3000/inventory?userid=${playerId}`)
      .then((res) => res.json())
      .then((playerInv) => setPlayerInventory(playerInv));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="3 Digit ID Number" value={idNum} onChange={(e) => {setIdNum(Number(e.target.value))}}/>
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => {setQuantity(Number(e.target.value))}}/>
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Item ID 1</th>
            <th>Item ID 2</th>
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
              <tr key={item.itemid}>
                <td>{item.itemid}</td>
                <td>{item.itemid2}</td>
                <td>{item.itemName}</td>
                <td>{item.description}</td>
                <td>{item.effect}</td>
                <td>{item.buy}</td>
                <td>{item.sell}</td>
                <td>{item.quantity}</td>
              </tr>
            )})}
        </tbody>
      </table>
    </>
  );
}

export default ItemsTable;
