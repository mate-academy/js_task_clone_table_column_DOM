'use strict';

const tr = document.querySelectorAll('tr');

for (const td of tr) {
  td.insertBefore(td.cells[1].cloneNode(true), td.cells[4]);
}
