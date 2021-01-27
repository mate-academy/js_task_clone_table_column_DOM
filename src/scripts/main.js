'use strict';

// write your code here

const header = document.querySelector('thead');
const trHeaderCells = header.children[0].cells;
const trHeader = header.children[0];
const thHeader = document.createElement('th');

thHeader.textContent = trHeaderCells[1].textContent;
trHeader.insertBefore(thHeader, trHeaderCells[4]);

const footer = document.querySelector('tfoot');
const trFooterCells = footer.children[0].cells;
const trFooter = footer.children[0];
const thFooter = document.createElement('th');

thFooter.textContent = trFooterCells[1].textContent;
trFooter.insertBefore(thFooter, trFooterCells[4]);

const tBody = document.querySelector('tbody');
const trBody = tBody.children;

for (let i = 0; i < trBody.length; i++) {
  const tdBody = document.createElement('td');

  tdBody.textContent = trBody[i].children[1].textContent;
  trBody[i].insertBefore(tdBody, trBody[i].children[4]);
}
