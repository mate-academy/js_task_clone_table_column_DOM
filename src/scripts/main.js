'use strict';

const table = document.querySelector('table');

[...table.children].forEach(partOfTable => cloneColumn(partOfTable));

function cloneColumn(tablePart) {
  for (let i = 0; i < [...tablePart.children].length; i++) {
    tablePart.rows[i].cells[4]
      .before((tablePart.rows[i].cells[1])
        .cloneNode(true));
  }
}
