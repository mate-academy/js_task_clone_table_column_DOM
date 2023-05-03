'use strict';

// write your code here
const rowArray = document.querySelectorAll('tr');

rowArray.forEach(row => {
  const clone = row.children[1].cloneNode(true);

  row.insertBefore(clone, row.children[4]);
});
