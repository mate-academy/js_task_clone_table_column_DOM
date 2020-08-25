'use strict';

for (const row of document.querySelector('table').rows) {
  row.cells[4].before(row.cells[1].cloneNode(true));
}
