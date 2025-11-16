'use strict';

const tHead = document.querySelector('table thead');
const tBody = document.querySelector('table tbody');
const tFoot = document.querySelector('table tfoot');

const tHeadRows = tHead.querySelector('tr');
const tBodyRows = tBody.querySelectorAll('tr');
const tFootRows = tFoot.querySelector('tr');

const tableHeadSecondElementData = tHeadRows.querySelector('th:nth-child(2)');
const tableBodySedondsElementData = [...tBodyRows].map(
  (el) => el.children[1].textContent,
);
const tableFootSecondElementData = tFootRows.querySelector('th:nth-child(2)');

const newHeadTh = document.createElement('th');
const newFootTh = document.createElement('th');

newHeadTh.textContent = tableHeadSecondElementData.textContent;
newFootTh.textContent = tableFootSecondElementData.textContent;

tHeadRows.insertBefore(newHeadTh, tHeadRows.children[4]);
tFootRows.insertBefore(newFootTh, tFootRows.children[4]);

tBodyRows.forEach((row, i) => {
  const newTableTd = document.createElement('td');

  newTableTd.textContent = tableBodySedondsElementData[i];
  row.insertBefore(newTableTd, row.children[4]);
});
