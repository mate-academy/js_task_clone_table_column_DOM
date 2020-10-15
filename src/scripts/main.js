'use strict';

const tableRows = document.querySelector('table').rows;

for (let i = 0, l = tableRows.length; i < l; i++) {
  const tr = tableRows[i];

  if (i === 0 || i === tableRows.length - 1) {
    tr.children[4].insertAdjacentHTML('beforebegin', `
    <th>${tr.children[1].innerHTML}</th>
  `);

    continue;
  }

  tr.children[4].insertAdjacentHTML('beforebegin', `
    <td>${tr.children[1].innerHTML}</td>
  `);
}
