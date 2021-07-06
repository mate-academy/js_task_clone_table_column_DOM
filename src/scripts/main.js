'use strict';

const table = document.querySelector('table');
const copyPosition = 3; // место вставки копии
const copyOf = 1; // номер столбца для копирования

for (const section of table.children) {
  for (const row of section.children) {
    const copy = document.createElement('td');

    copy.textContent = row.children[copyOf].textContent;

    for (let i = 0; i < row.children.length; i++) {
      if (i === copyPosition) {
        row.append(copy);
      } else {
        row.append(row.children[0]);
      }
    }
  }
}
