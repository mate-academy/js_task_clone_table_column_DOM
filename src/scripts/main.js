'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const secondElement = row.children[1];
  const lastElement = row.children[row.children.length - 1];

  const clonedSecondElement = secondElement.cloneNode(true);

  lastElement.before(clonedSecondElement);
}
