'use strict';

// write your code here

const table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  const toInsertAfter = table.rows[i].childNodes[7];

  const row = table.rows[i].childNodes[3];

  const newRow = row.cloneNode(true);

  toInsertAfter.after(newRow);
}
