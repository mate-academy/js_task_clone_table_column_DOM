'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cellCopy = row.cells[4].cloneNode(true);

  row.append(cellCopy);

  row.cells[4].textContent = row.cells[1].textContent;
});
