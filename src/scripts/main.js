'use strict';

const tableAll = document.querySelector('table');

for (let i = 0; i < tableAll.rows.length; i++) {
  const trAll = document.querySelectorAll('tr');

  let newElement;

  if (i === 0 || i === (tableAll.rows.length - 1)) {
    newElement = document.createElement('th');
  }

  if (i > 0 && i < (tableAll.rows.length - 1)) {
    newElement = document.createElement('td');
  }

  trAll[i].append(newElement);

  newElement.textContent = tableAll.rows[i].cells[1].textContent;

  const salary = tableAll.rows[i].cells[4].textContent;

  const position = tableAll.rows[i].cells[5].textContent;

  tableAll.rows[i].cells[4].textContent = position;

  tableAll.rows[i].cells[5].textContent = salary;
}
