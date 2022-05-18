'use strict';

const tHead = document.querySelector('thead');
const tFoot = document.querySelector('tfoot');
const tBody = document.querySelector('tbody');
const neededTh = document.querySelectorAll('th');
const neededTd = document.querySelectorAll('td');

tHead.firstElementChild.insertBefore(neededTh[1].cloneNode(true), neededTh[4]);

tFoot.firstElementChild.insertBefore(neededTh[6].cloneNode(true), neededTh[9]);

let copiedItemCount = 1;
let insertBeforeItemCount = 4;

for (let i = 0; i < tBody.children.length; i++) {
  tBody.children[i].insertBefore(neededTd[copiedItemCount]
    .cloneNode(true), neededTd[insertBeforeItemCount]);
  copiedItemCount += 5;
  insertBeforeItemCount += 5;
}
