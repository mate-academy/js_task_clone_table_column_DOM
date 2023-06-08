'use strict';

const tableHead = document.querySelector('thead > tr');
const tableBody = document.querySelector('tbody');
const tableFoot = document.querySelector('tfoot > tr');

const thElemHead = document.createElement('th');
const thElemFoot = document.createElement('th');

thElemHead.textContent = tableHead.children[1].textContent;

tableHead.insertBefore(thElemHead, tableHead.children[4]);

for (const child of [...tableBody.children]) {
  const tdElem = document.createElement('td');

  tdElem.textContent = child.children[1].textContent;

  child.insertBefore(tdElem, child.children[4]);
}

thElemFoot.textContent = tableHead.children[1].textContent;
tableFoot.insertBefore(thElemFoot, tableFoot.children[4]);
