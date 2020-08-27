'use strict';

const list = document.querySelectorAll('tr');

list.forEach(row => {
  row.lastElementChild.before(row.children[1].cloneNode(true));
});
