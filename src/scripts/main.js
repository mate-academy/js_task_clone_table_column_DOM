'use strict';

const table = document.querySelectorAll('tr');

for (const column of table) {
  column.cells[4].before(column.cells[1].cloneNode(true));
}
