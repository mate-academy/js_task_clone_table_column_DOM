'use strict';

const tableRows = document.querySelectorAll('tr');

for (let i = 0; i < tableRows.length; i++) {
  const sourceClone = tableRows[i].children[1].cloneNode(true);

  tableRows[i].children[4].before(sourceClone);
}
