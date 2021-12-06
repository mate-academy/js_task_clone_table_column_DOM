'use strict';

const table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  if (i === 0) {
    const th = document.createElement('th');

    th.innerText = table.rows[0].cells[1].innerText;
    table.rows[0].cells[4].before(th);
  } else {
    const td = document.createElement('td');

    td.innerText = table.rows[i].cells[1].innerText;
    table.rows[i].cells[4].before(td);
  };
}
