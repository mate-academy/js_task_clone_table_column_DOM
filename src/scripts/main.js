'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  const newColumn = document.createElement(`${row.children[1].tagName}`);

  newColumn.textContent = row.children[1].innerText;
  row.children[4].before(newColumn);
});

// console.log(rows);
