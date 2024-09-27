'use strict';

const table = document.querySelector('table');

const copyAndPaste = (copy, pasteAfter) => {
  pasteAfter.after(copy.cloneNode(true));
};

copyAndPaste(table.rows[0].cells[1], table.rows[0].cells[3]);
copyAndPaste(table.rows[13].cells[1], table.rows[13].cells[3]);

[...table.tBodies[0].rows].forEach(row => {
  const cell2 = row.cells[1].cloneNode(true);
  const cell5 = row.insertCell(4);

  cell5.innerHTML = cell2.innerHTML;
});
