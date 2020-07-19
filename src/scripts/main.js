'use strict';

// write your code here
const head = document.querySelector('thead');
const headList = head.querySelector('tr');

headList.children[4].before(headList.children[1].cloneNode(true));

const bodyTable = document.querySelector('tbody');
const bodyList = bodyTable.querySelectorAll('tr');

for (const row of bodyList) {
  row.children[4].before(row.children[1].cloneNode(true));
}

const footer = document.querySelector('tfoot');
const footerList = footer.querySelector('tr');

footerList.children[4].before(footerList.children[1].cloneNode(true));
