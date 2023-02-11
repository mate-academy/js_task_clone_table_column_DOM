'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const copy = table.rows[i].cells[1].cloneNode(true);

  table.rows[i].cells[3].insertAdjacentElement('afterend', copy);
}
