'use strict';

/* const newTable = document.querySelector('table'); */

const position = document.querySelectorAll('tr');

position.forEach(row => {
  const element = row.children[1].cloneNode(true);

  row.insertBefore(element, row.children[4]);
});
