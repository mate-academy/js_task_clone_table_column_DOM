'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const x = table.rows[i].cells[1];
  const y = table.rows[i].insertCell(4);

  y.innerText = x.innerText;
}
