'use strict';

const theTable = document.querySelector('table');

function copyColumn(table, fromIndex, toIndex) {
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;

    const sourceCell = cells[fromIndex];

    const newCell = rows[i].insertCell(toIndex);

    newCell.innerHTML = sourceCell.innerHTML;

    const computedStyles = getComputedStyle(sourceCell);

    for (let j = 0; j < computedStyles.length; j++) {
      const styleName = computedStyles[j];
      const styleValue = computedStyles.getPropertyValue(styleName);

      newCell.style.setProperty(styleName, styleValue);
    }
  }
}

copyColumn(theTable, 1, 4);
