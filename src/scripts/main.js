'use strict';

const employees = document.getElementsByTagName('tr');

for (let i = 0; i < employees.length; i++) {
  const employee = employees[i];

  const positionColumn = employee.children[1];

  const positionColumnCopy = positionColumn.cloneNode(true);

  employee.insertBefore(positionColumnCopy, employee.children[4]);
}
