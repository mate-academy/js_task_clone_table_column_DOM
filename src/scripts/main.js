'use strict';

// write your code here
const rows = document.querySelectorAll('tr');

for (let i = 0; i < rows.length; i++) {
  const secondElementClone = rows[i].firstElementChild.nextElementSibling
    .cloneNode(true);
  const lastElement = rows[i].lastElementChild;

  rows[i].insertBefore(secondElementClone, lastElement);
}
