'use strict';

const tableRows = document.querySelectorAll('tr');

for (let i = 0; i < tableRows.length; i++) {
  const bodyToClone = tableRows[i].cells[1].cloneNode(true);

  tableRows[i].insertBefore(bodyToClone, tableRows[i].cells[4]);
};
