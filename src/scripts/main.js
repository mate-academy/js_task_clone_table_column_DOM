'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const lastTh = row.lastElementChild;

  row.removeChild(lastTh);

  const copyOfSecond = row.firstElementChild.nextElementSibling.cloneNode(true);

  row.appendChild(copyOfSecond);
  row.appendChild(lastTh);
});
