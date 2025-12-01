'use strict';

const body = Array.from(document.querySelectorAll('tr'));

for (const row of body) {
  const elem = row.cells[1].cloneNode(true);

  row.cells[4].before(elem);
}
