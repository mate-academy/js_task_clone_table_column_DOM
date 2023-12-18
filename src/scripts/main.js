'use strict';

// write your code here
const table = document.querySelector('table');
const tBody = table.tBodies[0];
const lastColumnIndex = table.tHead.rows[0].cells.length - 1;

// head th
const newTh = document.createElement('th');
const thSalary = table.tHead.rows[0].cells[lastColumnIndex];

newTh.textContent = table.tHead.rows[0].cells[1].textContent;

thSalary.before(newTh);

// body td's
for (let i = 0; i < tBody.rows.length; i++) {
  const newTd = document.createElement('td');
  const tdSalary = tBody.rows[i].cells[lastColumnIndex];

  newTd.textContent = tBody.rows[i].cells[1].textContent;
  tdSalary.before(newTd);
}

// footer th
const newTf = document.createElement('th');
const tfSalary = table.tFoot.rows[0].cells[lastColumnIndex];

newTf.textContent = table.tFoot.rows[0].cells[1].textContent;
tfSalary.before(newTf);
