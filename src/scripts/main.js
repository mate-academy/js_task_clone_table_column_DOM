'use strict';

// write your code here

const table = [...document.querySelector('table').rows];

table.forEach(row => {
  row.insertBefore(row.children[1].cloneNode(true), row.children[4]);
});
