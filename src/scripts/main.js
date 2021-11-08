'use strict';

const table = document.querySelector('table');

const thHead = document.createElement('th');

thHead.textContent = table.rows[0].cells[1].textContent;
table.tHead.children[0].children[4].before(thHead.cloneNode(true));

const thFoot = document.createElement('th');

thFoot.textContent = table.rows[table.rows.length - 1].cells[1].textContent;
table.tFoot.children[0].children[4].before(thFoot.cloneNode(true));

for (let i = 0; i < table.children[1].rows.length; i++) {
  const td = document.createElement('td');

  td.textContent = table.children[1].rows[i].cells[1].textContent;
  table.children[1].children[i].children[4].before(td.cloneNode(true));
}
