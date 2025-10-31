'use strict';

const tableEl = document.querySelector('table');
const rows = [...tableEl.rows];

rows.forEach((row) => {
  const lastTd = row.lastElementChild;
  const secondTd = row.firstElementChild.nextElementSibling;
  const cloneTd = secondTd.cloneNode(true);

  lastTd.insertAdjacentElement('beforebegin', cloneTd);
});
