'use strict';
/* eslint-disable */

const thPosition = document.querySelector('thead tr th:nth-child(2)');
const theadTr = document.querySelector('thead tr');
const tfootTr = document.querySelector('tfoot tr');

theadTr.insertBefore(thPosition.cloneNode(true), theadTr.children[4]);
tfootTr.insertBefore(thPosition.cloneNode(true), tfootTr.children[4]);

const allPositionsTd = [...document.querySelectorAll('tbody tr td:nth-child(2)')];
const allTbodyTr = [...document.querySelectorAll('tbody tr')];

for (let i = 0; i < allPositionsTd.length; i++) {
  allTbodyTr[i].insertBefore(allPositionsTd[i].cloneNode(true), allTbodyTr[i].children[4]);
}


