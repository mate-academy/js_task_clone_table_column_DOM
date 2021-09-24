'use strict';

// write your code here
const dashboard = document.querySelector('table');
const rows = [...dashboard.rows];

rows.forEach(row => {
  row.lastElementChild.before(row.children[1].cloneNode(true));
});
