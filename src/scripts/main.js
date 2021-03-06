'use strict';

const headerList = document.querySelector('thead > tr');

const copingHeaderElement = headerList.querySelector('th:nth-child(2)');

headerList.children[4].before(copingHeaderElement.cloneNode(true));

const copingColumn = document.querySelectorAll('tbody > tr > td:nth-child(2)');

const bodyList = document.querySelectorAll('tbody > tr');

bodyList.forEach((line, index) => {
  line.children[4].before(copingColumn[index].cloneNode(true));
});

const footerList = document.querySelector('tfoot > tr');

const copingFooterElement = footerList.querySelector('th:nth-child(2)');

footerList.children[4].before(copingFooterElement.cloneNode(true));
