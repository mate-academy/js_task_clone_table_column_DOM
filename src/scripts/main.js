/* eslint-disable no-unused-vars */
'use strict';

const table = document.querySelector('table');

const tableHead = table.querySelector('thead').querySelector('tr');
const tableBody = table.querySelector('tbody').querySelectorAll('tr');
const tableFoot = table.querySelector('tfoot').querySelector('tr');

const th = createElement('th', tableHead);
const tf = createElement('th', tableFoot);

function createElement(type, parentElement) {
  const element = document.createElement(type);

  element.innerText = parentElement.children[1].innerHTML;
  parentElement.children[4].before(element);
}

tableBody.forEach(tr => {
  const td = document.createElement('td');
  const copyTh = tr.children[1];
  const placeToStand = tr.children[4];

  td.innerText = copyTh.innerHTML;
  placeToStand.before(td);
});
