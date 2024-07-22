'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((item) => {
  const secondCell = item.cells[1].cloneNode(true);

  item.cells[3].after(secondCell);
});
