'use strict';

const tableRows = [...document.getElementsByTagName('tr')];

for (const row of tableRows) {
  row.cells[3].after(row.cells[1].cloneNode(true));
}
