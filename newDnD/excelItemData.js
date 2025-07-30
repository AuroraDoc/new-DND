import readXlsxFile from 'read-excel-file/node';

let items = []

async function loadItems() {
    try {
        const rows = await readXlsxFile("./src/assets/Items.xlsx");
        
         

    } catch (err) {
        console.error("Error reading file:", err);
    }
}

loadItems();
