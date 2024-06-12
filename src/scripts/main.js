'use strict';

const table = document.querySelector('table').children;

const header = (table[0]);
const tBody = (table[1]);
const tFooter = (table[2]);

function copy(tablePart) {
  const row = tablePart.children;

  for (let i = 0; i < row.length; i++) {
    const position = row[i].children[1];
    const salary = row[i].children[4];
    const positionCopy = position.cloneNode(true);

    row[i].insertBefore(positionCopy, salary);
  }
};
copy(header);
copy(tBody);
copy(tFooter);
