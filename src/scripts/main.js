'use strict';

const rows = Array.from(document.querySelectorAll('tbody tr'));

const dataObj = rows.map(row => {
  const cells = Array.from(row.children);
  const extraPositionCell = document.createElement('td');

  extraPositionCell.textContent = cells[1].textContent;

  return {
    name: cells[0].textContent,
    position: cells[1].textContent,
    office: cells[2].textContent,
    age: cells[3].textContent,
    position2: extraPositionCell.textContent,
    salary: cells[4].textContent,
  };
});

const tHeadRow = document.querySelector('thead tr');
const tFootRow = document.querySelector('tfoot tr');
const newTh = document.createElement('th');

newTh.textContent = 'Position';

const newThForTfoot = newTh.cloneNode(true);

const lastThInHead = tHeadRow.querySelector('th:last-child');
const lastThInFoot = tFootRow.querySelector('th:last-child');

tHeadRow.insertBefore(newTh, lastThInHead);
tFootRow.insertBefore(newThForTfoot, lastThInFoot);

const tbody = document.querySelector('tbody');

tbody.innerHTML = '';

dataObj.forEach(person => {
  const tableRow = document.createElement('tr');

  const nameCell = document.createElement('td');
  const positionCell = document.createElement('td');
  const officeCell = document.createElement('td');
  const ageCell = document.createElement('td');
  const positionCell2 = document.createElement('td');
  const salaryCell = document.createElement('td');

  nameCell.textContent = person.name;
  positionCell.textContent = person.position;
  officeCell.textContent = person.office;
  ageCell.textContent = person.age;
  positionCell2.textContent = person.position2;
  salaryCell.textContent = person.salary;

  tableRow.appendChild(nameCell);
  tableRow.appendChild(positionCell);
  tableRow.appendChild(officeCell);
  tableRow.appendChild(ageCell);
  tableRow.appendChild(positionCell2);
  tableRow.appendChild(salaryCell);

  tbody.appendChild(tableRow);
});
