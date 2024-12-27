'use strict';

const table = document.querySelector('table');

const trs = table.rows;

function addColumn(lines) {
  const rows = [...lines];

  rows.forEach((row) => {
    const tr = row.cells;
    const secondTr = tr[1].cloneNode(true);

    row.append(secondTr);
    row.append(tr[4]);
  });
}

addColumn(trs);
