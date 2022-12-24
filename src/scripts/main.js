'use strict';

const elementsTr = document.querySelectorAll('tr');

const cloneTableColumn = (rows = elementsTr, from = 2, to = 4) => {
  rows.forEach(el => {
    el.cells[to - 1].after(el.cells[from - 1].cloneNode(true));
  });
};

cloneTableColumn(elementsTr, 2, 4);
