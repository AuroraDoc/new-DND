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

app.get('/players', (req, res) => {
    let players = db.prepare("SELECT * FROM players").all()
    res.json(players)
})

app.get('/inventory', (req, res) => {
    const playerId = req.query.userid;
    let playerInvQuery = db.prepare(`SELECT * FROM inventory WHERE userid = ?`)
    let playerInventory = playerInvQuery.all(playerId)
    res.send(playerInventory)
    console.log(playerId)
})

app.get("/proficencies", (req, res) => {
    const playerId = req.query.userid
    let playerProficencyQuery = db.prepare("SELECT * FROM proficencies WHERE userid = ?")
    let playerProficenies = playerProficencyQuery.all(playerId)
    res.json(playerProficenies)
})

app.listen(port, () => {
    console.log("Servers Up")
})



//let mccoy = db.prepare("SELECT * FROM players WHERE id = ?").get(1)

//const insertUserQuery = db.prepare(`INSERT INTO players VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`)
//insertUserQuery.run(1, "Mccoy", "Bofa", "Ranger", "Wavari", 10, 12, 18, 13, 17, 17, 14)

