/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    for (let row of table.rows) {
        for(let cell of row.cells) {
            if (row.rowIndex == cell.cellIndex) {
                cell.style.backgroundColor = 'red';
            }
        }
    }
}
