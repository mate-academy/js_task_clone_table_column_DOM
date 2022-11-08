'use strict';

const rows = document.querySelectorAll('tr');

for (let i = 0; i < rows.length; i++) {
  if (i === 0 || i === rows.length - 1) {
    const columToPastHeadFoot = document.createElement('th');

    columToPastHeadFoot.textContent = rows[i].cells[1].innerText;
    rows[i].insertBefore(columToPastHeadFoot, rows[i].cells[4]);
  } else {
    const columToPast = document.createElement('td');

    columToPast.textContent = rows[i].cells[1].innerText;
    rows[i].insertBefore(columToPast, rows[i].cells[4]);
  }
}
