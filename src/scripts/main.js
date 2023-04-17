'use strict';

const table = document.querySelector('table');

[...table.rows].forEach((item, index) => {
  const element = table.rows[index].cells[1];
  const copy = document.createElement(element.tagName);

  copy.innerText = element.innerText;

  table.rows[index].insertBefore(copy, table.rows[index].cells[4]);
})
