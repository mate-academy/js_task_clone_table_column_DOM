'use strict';

const rows = [...document.querySelectorAll('tr')];

for (let i = 0; i < rows.length; i++) {
  if (i === 0 || i === rows.length - 1) {
    const thElement = document.createElement('th');
    const itemRow = rows[i].querySelectorAll('th');

    thElement.textContent = itemRow[1].innerText;
    rows[i].insertBefore(thElement, rows[i].children[4]);
  } else {
    const tdElement = document.createElement('td');
    const itemRow = rows[i].querySelectorAll('td');

    tdElement.textContent = itemRow[1].innerText;
    rows[i].insertBefore(tdElement, rows[i].children[4]);
  }
}
