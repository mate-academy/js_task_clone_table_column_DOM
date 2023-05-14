'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');
const theadClone = thead.children[0].children[1].cloneNode(true);
const tfootClone = tfoot.children[0].children[1].cloneNode(true);

thead.children[0].children[4].before(theadClone);
tfoot.children[0].children[4].before(tfootClone);

const trs = tbody.querySelectorAll('tr');
const trsArray = [ ...trs ];

for (const elem of trsArray) {
  const tbodyClone = elem.children[1].cloneNode(true);

  elem.children[4].before(tbodyClone);
}
