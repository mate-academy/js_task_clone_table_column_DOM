'use strict';

const rows = document.querySelectorAll('tr');

for (const key of rows) {
  key.insertBefore(key.cells[1].cloneNode(true), key.cells[4]);
}
