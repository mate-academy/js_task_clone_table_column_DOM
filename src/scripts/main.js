'use strict';

// write your code here
const tr = document.querySelectorAll('tr');
const table = document.querySelector('table');
const arrTr = [ ...tr ];

arrTr.map(function clone(item) {
  if (item.parentElement === table.children[0]
    || item.parentElement === table.children[2]) {
    const cloneColumnTh = document.createElement('th');

    cloneColumnTh.innerHTML = item.children[1].innerText;
    item.children[4].before(cloneColumnTh);
  }

  if (item.parentElement === table.children[1]) {
    const cloneColumn = document.createElement('td');

    cloneColumn.innerHTML = item.children[1].innerText;
    item.children[4].before(cloneColumn);
  }
});
