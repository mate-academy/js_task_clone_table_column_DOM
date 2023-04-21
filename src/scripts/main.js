'use strict';

const table = document.querySelector('table');
const tbodies = [...table.tBodies];
const cellsInColumn2 = [];

const copyAndPaste = (copy, pasteAfter) => {
  pasteAfter.after(copy.cloneNode(true));
};

copyAndPaste(table.rows[0].cells[1], table.rows[0].cells[3]);
copyAndPaste(table.rows[13].cells[1], table.rows[13].cells[3]);

tbodies.forEach((tbody) => {
  [...tbody.rows].forEach((row) => {
    cellsInColumn2.push(row.cells[1]);
  });

  [...tbody.rows].forEach((row, index) => {
    const cell5 = row.insertCell(4);

    cell5.innerHTML = cellsInColumn2[index].innerHTML;
  });
});
