'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');
const headTitle = thead.querySelector('tr');
const bodyList = tbody.querySelectorAll('tr');
const footTitle = tfoot.querySelector('tr');

headTitle.children[4].before(headTitle.children[1].cloneNode(true));

[...bodyList].forEach(element => {
  return element.children[4].before(element.children[1].cloneNode(true));
});

footTitle.children[4].before(footTitle.children[1].cloneNode(true));
