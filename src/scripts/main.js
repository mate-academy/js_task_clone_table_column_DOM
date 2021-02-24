'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  (i === 0 || i === 13)
    ? table.rows[i].cells[4].insertAdjacentHTML('beforebegin', `
    <th>${table.rows[i].cells[1].innerText}</th>
  `)
    : table.rows[i].cells[4].insertAdjacentHTML('beforebegin', `
  <td>${table.rows[i].cells[1].innerText}</td>
`);
}
