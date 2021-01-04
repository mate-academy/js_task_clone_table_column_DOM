'use strict';

const list = document.querySelectorAll('tr');

list.forEach(row => {
  row.children[4].before(row.children[1].cloneNode(true));
});
