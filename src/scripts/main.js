'use strict';

const table = document.querySelector('table');

const sections = [table.tHead, table.tBodies[0], table.tFoot];

sections.forEach((section) => {
  Array.from(section.rows).forEach((row) => {
    const secondCell = row.cells[1];

    const copyOfCell = secondCell.cloneNode(true);

    row.insertBefore(copyOfCell, row.cells[row.cells.length - 1]);
  });
});
