'use strict';

const table = document.querySelector('table');
const tables = table.children;

for (const part of tables) {
  const linescollection = part.children;

  for (const line of linescollection) {
    let newElement;

    if (part.tagName === 'tbody') {
      newElement = document.createElement('td');
    } else {
      newElement = document.createElement('th');
    }

    newElement.textContent = line.children[1].textContent;

    line.insertBefore(newElement, line.children[3]);
  }
}
