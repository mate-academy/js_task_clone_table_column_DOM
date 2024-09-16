'use strict';

const table = document.querySelector('table');
const tableElements = table.children;

function getCopy(element) {
  const rows = element.children;

  for (const row of rows) {
    const cells = row.children;

    cells[3].after(cells[1].cloneNode(true));
  }
}

[...tableElements].forEach(element => getCopy(element));
