'use strict';

// copy first column header
let tableHeader = document.querySelector('thead');

let th = Array.from(tableHeader.querySelectorAll('th'));

let thPosition = th.filter((elem) => elem.innerHTML === 'Position')[0];

let lastChildTableHeader = tableHeader.lastElementChild.lastElementChild;

lastChildTableHeader.before(thPosition.cloneNode(true));

// copy first column footer
tableHeader = document.querySelector('tfoot');

th = Array.from(tableHeader.querySelectorAll('th'));

thPosition = th.filter((elem) => elem.innerHTML === 'Position')[0];

lastChildTableHeader = tableHeader.lastElementChild.lastElementChild;

lastChildTableHeader.before(thPosition.cloneNode(true));

function copyPositonData() {
  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.children);

  rows.forEach((row) => {
    const columns = Array.from(row.children);

    columns[4].before(columns[1].cloneNode(true));
  });
}

copyPositonData();
