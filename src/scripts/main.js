'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const tfoot = table.querySelector('tfoot');

function changeColumns(...elements) {
  elements.forEach((element) => {
    const rows = [...element.querySelectorAll('tr')];

    rows.forEach((row) => {
      const children = row.children;
      const lastChildren = children[children.length - 1];
      const newCell = document.createElement(`${row.cells[0].tagName}`);

      newCell.textContent = row.cells[1].textContent;
      row.insertBefore(newCell, lastChildren);
    });
  });
}

changeColumns(thead, tbody, tfoot);
