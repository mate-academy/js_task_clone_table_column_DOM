'use strict';

// write your code here

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const data = table.rows[i].cells[1];

  table.rows[i].cells[3].insertAdjacentHTML('afterend', data.outerHTML);
}
