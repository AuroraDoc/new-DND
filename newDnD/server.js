import Database from "better-sqlite3"
import express from "express"
import cors from "cors"

const app = express()
const port = 3000
const db = new Database("./src/assets/players.db")

app.use(cors())
app.use(express.json())

const createUserQuery = `
    CREATE TABLE IF NOT EXISTS players (
        id INTEGER PRIMARY KEY,
        playername TEXT,
        charactername TEXT,
        characterclass TEXT,
        characterrace TEXT,
        ac INT,
        strength INT,
        dexterity INT,
        intellect INT,
        wisdom INT,
        constitution INT,
        charisma INT
    )
`
db.exec(createUserQuery)

function checkUserInv(userId, itemId){
    let query = null
    let itemPos = 0
    let quantity = 0
    
    if(itemId < 422){
        query = db.prepare(`SELECT * FROM inventory WHERE itemid = ? AND userid = ?`).all(itemId, userId)
        itemPos = 1
    }
    else if(422 < itemId && itemId< 1000) {
        query = db.prepare(`SELECT * FROM inventory WHERE itemid2 = ? AND userid = ?`).all(itemId, userId)
        itemPos = 2
    } else {
        console.error("Item ID too big")
    }
    
    if(query.length > 0){
        return {exists: true, itemPos: itemPos, quantity: query[0].quantity}
    } else {
        return {exists: false, itemPos: itemPos}
    }

}

app.get('/players', (req, res) => {
    let players = db.prepare("SELECT * FROM players").all()
    res.json(players)
})

app.get('/inventory', (req, res) => {
    const playerId = req.query.userid;
    console.log(playerId)
    let playerInventory = db.prepare(`SELECT * FROM inventory WHERE userid = ?`).all(playerId)
    res.send(playerInventory)
})

app.get("/proficencies", (req, res) => {
    const playerId = req.query.userid
    let playerProficencyQuery = db.prepare("SELECT * FROM proficencies WHERE userid = ?")
    let playerProficenies = playerProficencyQuery.all(playerId)
    res.json(playerProficenies)
})



app.post("/updateInventory", (req, res) => {
    let { userid, itemid, newQuantity } = req.body

    let {exists, itemPos, quantity} = checkUserInv(userid, itemid, quantity)
    let query = ``
    if(exists){
        if(itemPos == 1){
            query = `UPDATE inventory SET quantity = ? WHERE userid = ? && itemid = ?`
        } else{
            query = query = `UPDATE inventory SET quantity = ? WHERE userid = ? && itemid2 = ?`
        }

    } else{
        if(itemPos == 1){
            query = `INSERT INTO inventory (userid, itemid, quantity) VALUES (?, ?, ?)`
        } else{
            query = `INSERT INTO inventory (userid, itemid2, quantity) VALUES (?, ?, ?)`
        }        
    }
    db.prepare(query)
    query.run()

    if(itemId < 422){
        let checkItemId = db.prepare(`SELECT itemnum1, description FROM items WHERE itemnum1 = ?`).all(itemId)
    } else if(422 < itemId < 1000){
        let checkItemId = db.prepare(`SELECT * FROM items WHERE itemnum2 = ?`).all(itemId)
    } else {
        let checkItemId = db.prepare(`SELECT * FROM items WHERE itemnum = ?`).all(itemId)
    }
        

})


app.listen(port, () => {
    console.log("Servers Up")
})

