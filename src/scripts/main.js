'use strict';

const clone = (rows, position, newPosition) => {
  rows.forEach((row) => {
    const children = row.children;
    const pastePosition = Math.min(newPosition, children.length);

    const cell =
      row.querySelector(`th:nth-child(${position})`) ||
      row.querySelector(`td:nth-child(${position})`);

    const place =
      row.querySelector(`th:nth-child(${pastePosition})`) ||
      row.querySelector(`td:nth-child(${pastePosition})`);

    const newCell = cell.cloneNode(true);

    if (pastePosition !== newPosition) {
      place.after(newCell);
    } else {
      place.before(newCell);
    }
  });
};

const table = document.querySelector('table');
const allRows = [...table.querySelectorAll('tr')];

clone(allRows, 2, 5);
