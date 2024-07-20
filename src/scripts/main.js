'use strict';

// write your code here
const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');

for (const tr of tbody.rows) {
  const trPosition = tr.cells[1];
  const clonedtrPosition = trPosition.cloneNode(true);

  tr.insertBefore(clonedtrPosition, tr.cells[4]);
}

const thRow = thead.rows[0];
const thPosition = thRow.cells[1];
const clonedThPosition = thPosition.cloneNode(true);

thRow.insertBefore(clonedThPosition, thRow.cells[4]);

const tfRow = tfoot.rows[0];
const tfPosition = tfRow.cells[1];
const clonedTfPosition = tfPosition.cloneNode(true);

tfRow.insertBefore(clonedTfPosition, tfRow.cells[4]);
