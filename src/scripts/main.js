'use strict';

const tableBody = document.querySelector('tbody');
const tableHead = document.querySelector('thead');
const tableFoot = document.querySelector('tfoot');

function copyPaste(section) {
  if (!section) {
    return;
  }

  const copyIndex = 1;

  [...section.children].forEach((row) => {
    const sourceCell = row.children[copyIndex];

    if (!sourceCell) {
      return;
    }

    const clone = sourceCell.cloneNode(true);

    const insertBeforeIndex = row.children.length - 1;
    const targetCell = row.children[insertBeforeIndex];

    targetCell.before(clone);
  });
}

copyPaste(tableHead);
copyPaste(tableBody);
copyPaste(tableFoot);
