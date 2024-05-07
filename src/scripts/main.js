'use strict';

const tabel = document.querySelector('table');
const elements = [...tabel.children];

const clone = (rows, position, newPosition) => {
  rows.forEach((row) => {
    const children = row.children;
    const pastePosition =
      newPosition > [...children].length ? [...children].length : newPosition;

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

elements.forEach((element) => {
  const rows = element.querySelectorAll('tr');

  clone(rows, 2, 5);
});
