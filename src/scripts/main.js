'use strict';

// write your code here
const table = document.getElementsByTagName('table')[0];

for (let i = 0; i < table.rows.length; i++) {
  const clone = table.rows[i].cells[1];
  const clonePosition = clone.parentElement.parentElement;

  switch (true) {
    case clonePosition.tagName === 'THEAD' || clonePosition.tagName === 'TFOOT':
      table.rows[i].cells[4].insertAdjacentHTML('beforebegin', `
      <th>
        ${clone.innerHTML}
      </th>`);
      break;

    case clonePosition.tagName === 'TBODY':
      table.rows[i].cells[4].insertAdjacentHTML('beforebegin', `
      <td>
        ${clone.innerHTML}
      </td>`);
      break;

    default:
      break;
  }
}
