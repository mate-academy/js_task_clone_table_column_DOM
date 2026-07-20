'use strict';

const tableRows = document.querySelector('table').rows;

for (const row of tableRows) {
  const cellToCopy = row.cells[1];

  row.cells[4].insertAdjacentElement('beforebegin', cellToCopy.cloneNode(true));
}
