'use strict';

const allTrs = Array.from(document.querySelectorAll('tr'));

for (const child of allTrs) {
  const allCells = Array.from(child.querySelectorAll('td, th'));

  for (let i = 0; i < allCells.length; i++) {
    if (i === 1) {
      const newCell = document.createElement(allCells[i].tagName.toLowerCase());

      newCell.textContent = allCells[i].textContent;
      child.lastElementChild.insertAdjacentElement('beforebegin', newCell);
    }
  }
}
