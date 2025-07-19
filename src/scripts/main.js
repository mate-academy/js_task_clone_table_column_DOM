'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];
const positions = [];

for (const row of rows) {
  const cells = [...row.cells];

  positions.push(cells[1].innerText);
}

for (let i = 0; i < rows.length; i += 1) {
  const row = rows[i];
  const cells = [...row.cells];

  if (i === 0 || i === rows.length - 1) {
    cells[cells.length - 1].insertAdjacentHTML(
      'beforebegin',
      `<th>${positions[i]}</th>`,
    );
  } else {
    cells[cells.length - 1].insertAdjacentHTML(
      'beforebegin',
      `<td>${positions[i]}</td>`,
    );
  }
}
