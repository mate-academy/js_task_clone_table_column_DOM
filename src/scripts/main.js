'use strict';

// write your code here
const tableRows = document.querySelectorAll('tr');

tableRows.forEach((row) => {
  row.children[3].after(row.children[1].cloneNode(true));
});
