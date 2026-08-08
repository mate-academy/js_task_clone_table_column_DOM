'use strict';

const tableRows = document.querySelectorAll('tr');

for (let i = 0; i < tableRows.length; i++) {
  const cloned = tableRows[i].children[1].cloneNode(true);

  tableRows[i].lastElementChild.before(cloned);
}
