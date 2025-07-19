import ItemsTable from "../components/ItemsTable";

function PlayerInventory({player}){
    return <>
    <ItemsTable player={player} />
    </>
}

export default PlayerInventory;