'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const selectedColumn = 1;
  const selectedPlace = 4;

  row.insertBefore(
    row.children[selectedColumn].cloneNode(true), row.children[selectedPlace]
  );
}
