'use strict';

const tableBody = document.querySelector('tbody');

const tableHead = document.querySelector('thead');

const tableFoot = document.querySelector('tfoot');

const headName = tableHead.rows[0].cells[1].innerHTML;
const footName = tableFoot.rows[0].cells[1].innerHTML;

const lasthead = document.createElement('tr');
const lastfoot = document.createElement('tr');

lasthead.innerHTML = headName;
lastfoot.innerHTML = footName;

const arrayPosition = [];

for (const a of tableBody.children) {
  arrayPosition.push(a.children[1].textContent);
}

const elementHeadTooAdd = tableHead.children[0].children[4];

elementHeadTooAdd.before(lasthead);

const elementFootTooAdd = tableFoot.children[0].children[4];

elementFootTooAdd.before(lastfoot);

for (const a of tableBody.children) {
  const add = a.children[4];

  for (let i = 0; i < arrayPosition.length; i++) {
    const newCell = document.createElement('td');

    newCell.textContent = arrayPosition[i];
    add.before(newCell);
  }
}
