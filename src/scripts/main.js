'use strict';

// write your code here

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const secondChild = row.children[1];
  const lastChild = row.children[row.children.length - 1];
  let copySecondChild = document.createElement('td');

  if (secondChild.textContent === 'Position') {
    copySecondChild = document.createElement('th');
  }

  copySecondChild.textContent = secondChild.textContent;

  row.insertBefore(copySecondChild, lastChild);
});
