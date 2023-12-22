'use strict';

const rows = [...document.querySelectorAll('tr')];

rows.forEach(row => {
  const cell = document.createElement(row.children[1].tagName.toLowerCase());

  cell.textContent = row.children[1].textContent;
  row.insertBefore(cell, row.children[row.children.length - 1]);
});
