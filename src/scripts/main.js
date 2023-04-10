'use strict';

const rows = document.querySelectorAll('tr');

[...rows].forEach((row, i) => {
  const cell = row.insertCell(-1);

  cell.textContent = row.cells[1].innerHTML;

  if (i === 0 || i === rows.length - 1) {
    cell.outerHTML = `<th>${cell.innerHTML}</th>`;
  }
});
