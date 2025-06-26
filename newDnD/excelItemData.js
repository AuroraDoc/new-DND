import readXlsxFile from 'read-excel-file/node';

readXlsxFile("./src/assets/Items.xlsx").then(row => {
    console.log(row)
})


let players = [];
function loadPlayers(excelSheet) {
  //loop through excel cells for player names
}