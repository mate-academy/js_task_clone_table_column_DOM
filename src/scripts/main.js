'use strict';

// write your code here
const table = document.querySelector('table');

/// создание head
const createTh = document.createElement('th');

createTh.textContent = table.querySelectorAll('thead tr th')[1].textContent;

const vst = table.querySelectorAll('thead tr th')[3];

vst.after(createTh);

// создание  body

table.querySelectorAll('tbody tr').forEach((elem) => {
  const createTd = document.createElement('td');

  createTd.textContent = elem.cells[1].textContent;
  elem.cells[3].after(createTd);
});

// создание footer
const createThFooter = document.createElement('th');

createThFooter.textContent =
  table.querySelectorAll('tfoot tr th')[1].textContent;

const aft = table.querySelectorAll('tfoot tr th')[3];

aft.after(createThFooter);
