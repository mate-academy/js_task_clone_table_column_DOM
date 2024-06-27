'use strict';

const table = document.querySelector('table');

const tableRows = [...table.querySelectorAll('tr')];

const arrList = tableRows.map((elem) => {
  return elem.children[1].innerText;
});

for (let i = 0; i < tableRows.length; i++) {
  let tableList = `<td>${arrList[i]}</td>`;

  if (tableRows[i].cells[2].tagName === 'TH') {
    tableList = `<th>${arrList[i]}</th>`;
  }

  tableRows[i].cells[2].insertAdjacentHTML('afterend', tableList);
}
