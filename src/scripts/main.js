'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const tFoot = document.querySelector('tfoot');

const headRows = tHead.querySelector('tr');
const bodyRows = tBody.querySelectorAll('tr');
const footRows = tFoot.querySelector('tr');

headRows.lastElementChild.before(headRows.children[1].cloneNode(true));

for (let i = 0; i < bodyRows.length; i++) {
  bodyRows[i].lastElementChild.before(bodyRows[i].children[1].cloneNode(true));
}

footRows.lastElementChild.before(footRows.children[1].cloneNode(true));
