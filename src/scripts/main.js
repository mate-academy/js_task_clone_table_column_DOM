'use strict';

const bodyElement = document.body;
const tableElement = bodyElement.querySelector('table');
const tHead = tableElement.querySelector('thead');
const tBody = tableElement.querySelector('tbody');
const tFoot = tableElement.querySelector('tfoot');

const trHead = tHead.querySelector('tr');
const trBody = tBody.querySelector('tr');
const trFoot = tFoot.querySelector('tr');

const addList = (tr) => {
  const thBody = tBody.querySelectorAll('td:nth-child(2)');

  for (let i = 0; i < tr.length; i++) {
    const row = tr[i];
    const lastChild = row.querySelector('td:last-child');
    const newTd = document.createElement('td');

    newTd.textContent = thBody[i].textContent;
    row.insertBefore(newTd, lastChild);
  }
};

const addHeadFoot = (tr, elemToAdd) => {
  const lastChild = tr.querySelector('th:last-child');
  const newRow = document.createElement('th');

  newRow.textContent = tr.querySelector(elemToAdd).textContent;
  tr.insertBefore(newRow, lastChild);
};

addHeadFoot(trHead, 'th:nth-child(2)');
addList(trBody);
addHeadFoot(trFoot, 'th:nth-child(2)');
// write your code here
