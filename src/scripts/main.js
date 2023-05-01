'use strict';

const table = document.querySelector('table');
const row = document.querySelectorAll('tr');

for (let i = 0; i < table.rows.length; i++) {
  const position = table.rows[i].cells[1];
  const copyPosition = position.cloneNode(true);

  row[i].insertBefore(copyPosition, row[i].children[4]);
}
