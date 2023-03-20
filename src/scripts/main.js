'use strict';

const tr = document.querySelectorAll('tr');

tr.forEach(row => {
  const newCol = document.createElement(`${row.children[1].tagName}`);

  newCol.textContent = row.children[1].innerText;
  row.children[4].before(newCol);
});
