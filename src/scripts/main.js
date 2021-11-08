'use strict';

const table = document.querySelector('table');
const tabHead = table.tHead;
const tabFoot = table.tFoot;
const tabBody = table.children[1];

const thHead = document.createElement('th');

thHead.textContent = table.rows[0].cells[1].textContent;

tabHead.children[0].children[4].before(thHead.cloneNode(true));

const thFoot = document.createElement('th');

thFoot.textContent = table.rows[table.rows.length - 1].cells[1].textContent;

tabFoot.children[0].children[4].before(thFoot.cloneNode(true));

for (let i = 0; i < tabBody.rows.length; i++) {
  const td = document.createElement('td');

  td.textContent = tabBody.rows[i].cells[1].textContent;

  tabBody.children[i].children[4].before(td.cloneNode(true));
}
