'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const td = table.rows[i].cells[1].localName === 'td'
    ? document.createElement('td')
    : document.createElement('th');

  td.innerText = table.rows[i].cells[1].textContent;
  table.rows[i].append(td);
}

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].append(table.rows[i].cells[4]);
}
