'use strict';

const tableElements = document.querySelector('table');

function objectFromTable(table) {
  const obj = table.innerText.split('\n');
  const result = [];

  for (let i = 0; i <= obj.length - 1; i++) {
    const [personName, position, office, age, salary] = obj[i].split('\t');
    const person = {
      personName,
      position,
      office,
      age,
      salary,
    };

    result.push(person);
  }

  return result;
}

function modTable(table, object) {
  for (let i = 0; i <= object.length - 1; i++) {
    if (i === 0 || i === object.length - 1) {
      table.rows[i].innerHTML = `
          <th>${object[i].personName}</th>
          <th>${object[i].position}</th>
          <th>${object[i].office}</th>
          <th>${object[i].age}</th>
          <th>${object[i].position}</th>
          <th>${object[i].salary}</th>
      `;
    }

    table.rows[i].innerHTML = `
          <td>${object[i].personName}</td>
          <td>${object[i].position}</td>
          <td>${object[i].office}</td>
          <td>${object[i].age}</td>
          <td>${object[i].position}</td>
          <td>${object[i].salary}</td>
      `;
  }
}

const people = objectFromTable(tableElements);

modTable(tableElements, people);
