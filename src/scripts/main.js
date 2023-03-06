'use strict';

// write your code here
const tr = document.querySelectorAll('tr');

tr.forEach(row => {
  row.lastElementChild.before(row.children[1].cloneNode(true));
});
