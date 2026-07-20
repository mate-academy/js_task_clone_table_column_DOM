'use strict';

const tableRows = document.querySelector('table').rows;

for (const row of tableRows) {
  const cellToCopy = row.cells[1];

  row.cells[3].insertAdjacentElement('afterend', cellToCopy.cloneNode(true));
}
