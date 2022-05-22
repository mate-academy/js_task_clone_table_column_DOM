'use strict';

// write your code here
const row = document.querySelectorAll('tr');

for (let i = 0; i < row.length; i++) {
  const rowItem = row[i];
  const copy = rowItem.children[1].cloneNode(true);

  rowItem.children[4].before(copy);
}
