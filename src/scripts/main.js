'use strict';

// write your code here

const table = document.querySelectorAll('tr');

table.forEach(el => {
  el.children[4].before(el.children[1].cloneNode(true));
});
