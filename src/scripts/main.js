'use strict';

const row = document.querySelectorAll('tr');

const firstCell = [...row][0].querySelectorAll('th');
const lastCell = [...row][row.length - 1].querySelectorAll('th');
const positionName = [...firstCell][1].textContent;

const position = document.createElement('th');

position.textContent = positionName;

const lastUpperPosition = [...firstCell][4];
const lastLowerPosition = [...lastCell][4];

row[0].insertBefore(position, lastUpperPosition);

row[row.length - 1]
  .insertBefore(position.cloneNode(true), lastLowerPosition);

for (let i = 1; i < [...row].length - 1; i++) {
  const element = row[i].querySelectorAll('td');
  const lastElement = [...element][4];
  const elementName = [...element][1].textContent;
  const copyElement = document.createElement('td');

  copyElement.textContent = elementName;

  row[i].insertBefore(copyElement, lastElement);
}
