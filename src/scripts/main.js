'use strict';

document.querySelectorAll('tr').forEach(row => {
  row.cells[3].after(row.cells[1].cloneNode(true));
});
