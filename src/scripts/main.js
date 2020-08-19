'use strict';

function addColumnToTable(columnClone, columnBefore) {
  const tr = document.querySelectorAll('tr');

  for (let i = 0; i < tr.length; i++) {
    tr[i].insertBefore(
      tr[i].children[columnClone].cloneNode(true),
      tr[i].children[columnBefore]
    );
  }
}

addColumnToTable(1, 4);
