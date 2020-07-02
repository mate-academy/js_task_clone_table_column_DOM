'use strict';

const headTable = document.querySelector('thead');
const headList = headTable.querySelector('tr');

headList.children[4].before(headList.children[1].cloneNode(true));

const bodyTable = document.querySelector('tbody');
const bodyLists = bodyTable.querySelectorAll('tr');

for (const bodyList of bodyLists) {
  bodyList.children[4].before(bodyList.children[1].cloneNode(true));
}

const footTable = document.querySelector('tfoot');
const footList = footTable.querySelector('tr');

footList.children[4].before(footList.children[1].cloneNode(true));
