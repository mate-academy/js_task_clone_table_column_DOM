'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');

const headRow = thead.querySelector('tr');
const headThs = headRow.querySelectorAll('th');
const bodyRows = tbody.querySelectorAll('tr');
const footRow = tfoot.querySelector('tr');
const footThs = footRow.querySelectorAll('th');

function createTh(srcTh, tag, parent) {
  const thCopy = document.createElement(tag);

  thCopy.textContent = srcTh[1].textContent;
  parent.insertBefore(thCopy, srcTh[srcTh.length - 1]);
}

createTh(headThs, 'th', headRow);

bodyRows.forEach((tr) => {
  const bodyThs = tr.querySelectorAll('td');

  createTh(bodyThs, 'td', tr);
});

createTh(footThs, 'th', footRow);
