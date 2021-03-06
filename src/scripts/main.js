'use strict';

const headerList = document.querySelector('thead > tr');

const copingHeaderElement = headerList.querySelector('th:nth-child(2)');

headerList.children[4].before(copingHeaderElement.cloneNode(true));

const copingColumn = document.querySelectorAll('tbody > tr > td:nth-child(2)');

const bodyList = document.querySelectorAll('tbody > tr');

for (let i = 0; i < bodyList.length; i++) {
  bodyList[i].children[4].before(copingColumn[i].cloneNode(true));
}

const footerList = document.querySelector('tfoot > tr');

const copingFooterElement = footerList.querySelector('th:nth-child(2)');

footerList.children[4].before(copingFooterElement.cloneNode(true));
