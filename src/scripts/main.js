'use strict';

const clone = document.querySelector('table');

for (let i = 0; i < clone.rows.length; i++) {
  let td1 = document.createElement('td');
  const td2 =
    clone.rows[i].cells[clone.rows[i].cells.length - 1].cloneNode(true);

  td1 = clone.rows[i].cells[1].cloneNode(true);

  clone.rows[i].cells[clone.rows[i].cells.length - 1].replaceWith(td1, td2);
}
