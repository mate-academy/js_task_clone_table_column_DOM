'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  let copyEl;

  if (i === 0 || i === table.rows.length - 1) {
    copyEl = document.createElement('th');
  } else {
    copyEl = document.createElement('td');
  }

  copyEl.innerHTML = table.rows[i].cells[1].innerHTML;
  table.rows[i].cells[4].insertAdjacentElement('beforebegin', copyEl);
}
