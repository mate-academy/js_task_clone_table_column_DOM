'use strict';

const tableRow = [...document.querySelectorAll('tr')];

for (let i = 0; i < tableRow.length; i++) {
  tableRow[i].insertBefore(
    tableRow[i].children[1].cloneNode(true), tableRow[i].children[4]
  );
}
