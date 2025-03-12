'use strict';

// write your code here
const thheader = document.querySelector('thead');
const trElement = thheader.children[0];
const secondTh = trElement.children[1];
const secoTh = trElement.children[3];

const secondThCopy = secondTh.cloneNode(true);

secoTh.insertAdjacentElement('afterend', secondThCopy);

const tfoot = document.querySelector('tfoot');
const trElementFoot = tfoot.children[0];
const secondThFoot = trElementFoot.children[1];
const secoThFoot = trElementFoot.children[3];

const secondThCopyFoot = secondThFoot.cloneNode(true);

secoThFoot.insertAdjacentElement('afterend', secondThCopyFoot);

const tbody = document.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');

rows.forEach((row) => {
  const originalTd = row.children[1];
  const copiedTd = originalTd.cloneNode(true);

  const targetTd = row.children[3];

  targetTd.insertAdjacentElement('afterend', copiedTd);
});
