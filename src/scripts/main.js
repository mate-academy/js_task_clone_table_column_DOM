'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const itemToCopy = table.rows[i].cells[1];

  table.rows[i].children[4].before(itemToCopy.cloneNode(true));
}
