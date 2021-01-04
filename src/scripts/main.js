'use strict';

const tableRow = [...document.querySelectorAll('tr')];

for (let j = 0; j < tableRow.length; j++) {
  const arrRow = [...tableRow[j].children];

  if (j === 0 || j === tableRow.length - 1) {
    arrRow[3].insertAdjacentHTML('afterend', `
    <th>${arrRow[1].innerText}</th>
  `);
  } else {
    for (let i = 0; i < arrRow.length; i++) {
      if (i === 3) {
        (arrRow[3].insertAdjacentHTML('afterend', `
          <td>${arrRow[1].innerText}</td>
        `));
      }
    }
  }
}
