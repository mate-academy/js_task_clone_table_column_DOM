'use strict';

// write your code here
const INDEX_COLUNM = 1;
const INDEX_NEW_COLUNM = 4;

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  const cell = document.createElement(row.children[INDEX_COLUNM].localName);
  const cellBeforeApp = row.children[INDEX_NEW_COLUNM];

  cell.innerText = row.children[INDEX_COLUNM].textContent;

  cellBeforeApp.parentNode.insertBefore(cell, cellBeforeApp);
});
