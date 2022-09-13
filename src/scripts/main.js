'use strict';

const row = document.querySelectorAll('tr');

for (const column of row) {
  const copy = column.cells[1].cloneNode(true);

  column.cells[4].before(copy);
}
