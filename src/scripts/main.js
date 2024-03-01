'use strict';

// write your code here
function cloneColumn(table, columnIndex) {
  const tableElements = Array.from(table.querySelectorAll('tr'));

  tableElements.forEach(row => {
    const elements = Array.from(row.children);

    const clonnedElement = elements[columnIndex].cloneNode(true);

    elements[elements.length - 1].before(clonnedElement);
  });
}

const tableElement = document.querySelector('table');

cloneColumn(tableElement, 1);
