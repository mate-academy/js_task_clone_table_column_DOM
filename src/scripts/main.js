'use strict';

const tableHead = document.querySelector('thead');
const headList = tableHead.querySelector('tr');

const tableBody = document.querySelector('tbody');
const bodyLists = tableBody.querySelectorAll('tr');

const tableFooter = document.querySelector('tfoot');
const footerList = tableFooter.querySelector('tr');

headList.children[4].before(headList.children[1].cloneNode(true));

[...bodyLists].forEach(element => {
  return element.children[4].before(element.children[1].cloneNode(true));
});

footerList.children[4].before(footerList.children[1].cloneNode(true));
