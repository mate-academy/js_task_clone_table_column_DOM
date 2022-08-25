'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  const addNode = row.children[1].cloneNode(true);

  row.lastElementChild.before(addNode);
}
