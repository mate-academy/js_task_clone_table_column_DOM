'use strict';

const tableRows = document.querySelectorAll('tr');

for (let i = 0; i < tableRows.length; i++) {
  tableRows[i].lastElementChild.before(tableRows[i].cells[1].cloneNode(true));
}
