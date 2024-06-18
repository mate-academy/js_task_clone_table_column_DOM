'use strict';

const table = document.querySelector('table');

const rows = [...table.rows];

rows.forEach((row) => {
  const cells = [...row.cells];

  const cloneSecondCell = cells[1].cloneNode(true);

  const firstPartCells = cells.slice(0, -1);

  const newCells = [...firstPartCells, cloneSecondCell, cells.at(-1)];

  newCells.forEach((cell) => {
    row.append(cell);
  });
});
