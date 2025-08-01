'use strict';

const arr = document.querySelectorAll('tbody tr');

const headRow = document.querySelector('thead tr');
const ths = headRow.querySelectorAll('th');
const cloneTh = ths[1].cloneNode(true);

const tfootRow = document.querySelector('tfoot tr');
const tfs = tfootRow.querySelectorAll('th');
const cloneF = tfs[1].cloneNode(true);

headRow.insertBefore(cloneTh, ths[ths.length - 1]);
tfootRow.insertBefore(cloneF, tfs[tfs.length - 1]);

arr.forEach((el) => {
  const arr1 = el.querySelectorAll('td');
  const secondTd = arr1[1];
  const clone = secondTd.cloneNode(true);
  const lastTd = arr1[arr1.length - 1];

  el.insertBefore(clone, lastTd);
});
