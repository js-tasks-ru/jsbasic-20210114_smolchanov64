/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let IndexAge = 0;
    let IndexStatus = 0;
    let IndexGender = 0;
    
    for (let row of table.tHead.rows) {
      for (let cell of row.cells) {
        if (cell.textContent == 'Age') {
            IndexAge = cell.cellIndex;
        } else if (cell.textContent == 'Status') {
            IndexStatus = cell.cellIndex;
        } else if (cell.textContent == 'Gender') {
            IndexGender = cell.cellIndex;
        }
      }
    }

    for (let row of table.tBodies[0].rows) {
        
        dataAvailable = row.cells[IndexStatus].dataset.available;        
        if (dataAvailable === undefined) {
          row.hidden = true;          
        } else if (dataAvailable == 'true') {
          row.classList.add('available');
        } else if (dataAvailable == 'false') {
          row.classList.add('unavailable');
        }
        
        if (row.cells[IndexGender].textContent == 'm') {
          row.classList.add('male');
        } else {
          row.classList.add('female');
        }
        
        if (+row.cells[IndexAge].textContent < 18) {
            row.style.textDecoration = 'line-through';
        }      
      }
}
