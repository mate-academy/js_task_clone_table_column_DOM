'use strict';

const table = document.querySelector("table");
const theadRows = table.querySelectorAll("thead tr");
const tbodyRows = table.querySelectorAll("tbody tr");
const tfootRows = table.querySelectorAll("tfoot tr");

function cloneColumn(rows) {
  rows.forEach((row) => {
    const cellToClone = row.cells[1].cloneNode(true);

    row.insertBefore(cellToClone, row.cells[row.cells.length - 1]);
  });
}

cloneColumn(theadRows);
cloneColumn(tbodyRows);
cloneColumn(tfootRows);
