'use strict';

// write your code here

const table = document.querySelector('table');
const tr = [...document.querySelectorAll('tr')];

tr.map(function clone(item) {
  if (item.parentElement === table.children[0]
    || item.parentElement === table.children[2]) {
    const cloneTh = document.createElement('th');

    cloneTh.innerHTML = item.children[1].innerText;
    item.children[3].after(cloneTh);
  }

  if (item.parentElement === table.children[1]) {
    const cloneTd = document.createElement('td');

    cloneTd.innerHTML = item.children[1].innerText;
    item.children[4].before(cloneTd);
  }
});
