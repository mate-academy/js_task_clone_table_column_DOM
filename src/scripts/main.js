'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  const columTo = document.createElement('td');

  columTo.textContent = row.cells[1].innerText;
  row.insertBefore(columTo, row.cells[4]);

  return row;
});
