'use strict';

// write your code here

const rows = document.querySelectorAll('tr');

for (const rowElement of rows) {
  const elem = rowElement.children[1];
  const clone = elem.cloneNode(true);

  rowElement.insertBefore(clone, rowElement.children[4]);
}
