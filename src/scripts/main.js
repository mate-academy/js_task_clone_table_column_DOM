'use strict';

const table = document.getElementsByTagName('table');

for (const partTable of table[0].children) {
  for (const row of partTable.children) {
    const clonTeg = document.createElement(
      row.children[1].nodeName.toLocaleLowerCase());

    clonTeg.textContent = row.children[1].innerHTML;
    row.children[4].before(clonTeg);
  };
};
