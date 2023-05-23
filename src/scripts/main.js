'use strict';

const table = document.querySelector('table');
const rows = table.getElementsByTagName('tr');

for (let i = 0; i < rows.length; i++) {
  const secondChild = rows[i].childNodes[3].cloneNode(true);
  const lastChild = rows[i].childNodes[9];

  rows[i].insertBefore(secondChild, lastChild);
}
