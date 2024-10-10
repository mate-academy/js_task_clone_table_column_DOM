'use strict';

const table = document.querySelector('table');

const changeTable = Array.from(table.rows);

changeTable.forEach((el) => {
  const newColumn = el.cells[1].cloneNode(true);
  const lastElementOfColumn = el.cells[4];
  const td = document.createElement(el.cells[0].localName);

  el.append(td);
  el.cells[4].replaceWith(newColumn);
  el.cells[5].replaceWith(lastElementOfColumn);
});
