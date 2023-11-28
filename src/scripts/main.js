'use strict';

const rows = document.querySelectorAll('tr');

for (const [index, row] of rows.entries()) {
  if (index === 0 || index === rows.length - 1) {
    const tmpContent = row.cells[4].textContent;

    row.cells[4].textContent = row.cells[1].textContent;
    row.innerHTML += `<th>${tmpContent}</th>`;
  } else {
    const tmpContent = row.cells[4].textContent;

    row.cells[4].textContent = row.cells[1].textContent;
    row.innerHTML += `<td>${tmpContent}</td>`;
  }
}
