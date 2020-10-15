'use strict';

let positions = [...document.querySelectorAll('td')];
const lines = document.querySelectorAll('tr');

positions.shift();

positions = positions
  .map(x => x.textContent)
  .filter((value, index, arr) => (index % 5 === 0));
positions.unshift('Position');
positions.push('Position');

for (let i = 0; i < lines.length; i++) {
  let newCell = document.createElement('td');

  if (i === 0 || i === lines.length - 1) {
    newCell = document.createElement('th');
  }

  newCell.textContent = positions[i];
  lines[i].append(newCell);
}
