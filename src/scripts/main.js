'use strict';

const rows = [...document.querySelectorAll('tr')];

rows.forEach(row => {
  const { children } = row;
  const tag = children[0].tagName.toLowerCase();

  const cell = document.createElement(tag);

  cell.textContent = children[1].textContent;

  row.insertBefore(cell, children[children.length - 1]);
});
