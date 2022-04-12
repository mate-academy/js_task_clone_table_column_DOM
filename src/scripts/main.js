'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const elementName = row.children[1].innerText;

  if (elementName === 'Position') {
    const thElement = document.createElement('th');

    thElement.innerText = elementName;
    row.insertBefore(thElement, row.children[4]);
  } else {
    const tdElement = document.createElement('td');

    tdElement.innerText = elementName;
    row.insertBefore(tdElement, row.children[4]);
  }
}
