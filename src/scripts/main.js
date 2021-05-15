'use strict';

const table = document.querySelector('table');

for (const tableElement of table.children) {
  for (const tr of tableElement.children) {
    tr.children[3].innerText = tr.children[1].innerText;
  }
}
