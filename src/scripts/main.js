'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const clonTeg = document.createElement(
    row.children[1].nodeName.toLocaleLowerCase());

  clonTeg.cloneNode(true);
  clonTeg.textContent = row.children[1].innerHTML;
  row.lastElementChild.before(clonTeg);
});
