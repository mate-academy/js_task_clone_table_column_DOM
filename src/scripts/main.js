'use strict';

// write your code here
const table = document.querySelector('table');

const positionColumn = 1;
const positionInsertColumn = 4;

for (const row of [...table.rows]) {
  row.children[positionInsertColumn].before(
    row.children[positionColumn].cloneNode(true)
  );
}
