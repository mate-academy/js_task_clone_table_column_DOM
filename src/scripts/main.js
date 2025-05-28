'use strict';

// write your code here

const tableBody = document.querySelector('tbody');

const tableHead = document.querySelector('thead');
const tableFoot = document.querySelector('tfoot');
const headName = tableHead.rows[0].cells[1].innerHTML;
const footName = tableFoot.rows[0].cells[1].innerHTML;
const lasthead = tableHead.children[0].children[1].cloneNode(true);
const lastfoot = tableFoot.children[0].children[1].cloneNode(true);

const elementLastHead = document.createElement('th');
const elementLastFoot = document.createElement('th');

elementLastHead.innerHTML = headName;

elementLastFoot.innerHTML = footName;

const elementHeadTooAdd = tableHead.children[0].children[4];

elementHeadTooAdd.before(lasthead);

const elementFootTooAdd = tableFoot.children[0].children[4];

elementFootTooAdd.before(lastfoot);

for (const row of tableBody.children) {
  const salaryCell = row.children[4];
  const newCell = document.createElement('td');

  newCell.textContent = row.children[1].textContent;
  salaryCell.before(newCell);
}
