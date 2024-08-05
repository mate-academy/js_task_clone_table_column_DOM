'use strict';

// Додавання верхнього заголовку
const tableHead = document.querySelector('thead');
const firstRow = tableHead.querySelector('tr');
const allHeads = firstRow.querySelectorAll('th');

const copyPos = allHeads[1].textContent;
const newPos = document.createElement('th');

newPos.textContent = copyPos;

firstRow.insertBefore(newPos, allHeads[allHeads.length - 1]);

// Додавання нижнього заголовку
const tableFot = document.querySelector('tfoot');
const lastRow = tableFot.querySelector('tr');
const allFoots = lastRow.querySelectorAll('th');

const newFootPos = document.createElement('th');

newFootPos.textContent = copyPos;

lastRow.insertBefore(newFootPos, allFoots[allFoots.length - 1]);

// Додавання позиції
const body = document.querySelector('tbody');
const AllRows = body.querySelectorAll('tr');

AllRows.forEach((x) => {
  const ceils = x.querySelectorAll('td');
  const copyOfCeil = ceils[1].textContent;
  const data = document.createElement('td');

  data.textContent = copyOfCeil;

  x.insertBefore(data, ceils[ceils.length - 1]);
});
