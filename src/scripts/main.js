'use strict';

const appendElem = () => {
  const table = document.querySelector('table');

  for (let i = 0; i < table.rows.length; i++) {
    const getTd = table.rows[i].cells[1].innerHTML;

    if (table.rows[i].cells[1].innerHTML === 'Position') {
      table.rows[i].cells[4].insertAdjacentHTML('beforebegin', `
          <th>${getTd}</th>
        `);
    } else {
      table.rows[i].cells[4].insertAdjacentHTML('beforebegin', `
          <td>${getTd}</td>
        `);
    }
  }
};

appendElem();
