'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const cellToCopy = table.rows[i].children[1];

  table.rows[i].children[4].before(cellToCopy.cloneNode(true));
}
