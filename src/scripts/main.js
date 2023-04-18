'use strict';

const table = document.querySelector('table');

[...table.rows].forEach((item, index) => {
  const column = 1;
  const newColumn = 4;
  const element = table.rows[index].cells[column];
  const copy = document.createElement(element.tagName);

  copy.innerText = element.innerText;

  table.rows[index].insertBefore(copy, table.rows[index].cells[newColumn]);
});
