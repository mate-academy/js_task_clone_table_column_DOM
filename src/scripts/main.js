'use strict';

const headRow = document.querySelector('thead > tr');
const footRow = document.querySelector('tfoot > tr');
const bodyRows = [...document.querySelectorAll('tbody > tr')];

function inner(rows) {
  for (const row of rows) {
    const cell = row.insertCell(4);

    cell.innerText = row.innerText.split('\t')[1];
  }
}

function outer(element) {
  const cell = element.insertCell(4);
  const heading = document.createElement('th');

  heading.innerHTML = `<th>${element.innerText.split('\t')[1]}</th>`;

  cell.append(heading);

  cell.outerHTML = cell.innerHTML;
}

outer(headRow);
outer(footRow);
inner(bodyRows);
