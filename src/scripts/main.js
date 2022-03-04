'use strict';

const tab = document.getElementsByTagName('table')[0];

for (let i = 0; i < tab.rows.length; i++) {
  const clone = tab.rows[i].cells[1];
  const clonePosition = clone.parentElement.parentElement;

  switch (true) {
    case clonePosition.tagName === 'THEAD' || clonePosition.tagName === 'TFOOT':
      tab.rows[i].cells[4].insertAdjacentHTML('beforebegin', `
        <th>
          ${clone.innerHTML}
        </th>`);
      break;

    case clonePosition.tagName === 'TBODY':
      tab.rows[i].cells[4].insertAdjacentHTML('beforebegin', `
        <td>
          ${clone.innerHTML}
        </td>`);
      break;

    default:
      break;
  }
}
