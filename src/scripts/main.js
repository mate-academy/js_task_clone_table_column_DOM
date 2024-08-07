'use strict';

let rows = [...document.querySelectorAll('tr')]

rows.forEach(row => {
    let cells = row.cells;
    
    console.log(cells)

    cells[3].after(cells[1].cloneNode(true))
});
