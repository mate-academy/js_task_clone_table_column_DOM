'use strict';

const rows = [...document.querySelectorAll('tr')];

const column2 = rows.map((row) => {
  return row.children[1].cloneNode(true);
});

for (let i = 0; i < rows.length; i++) {
  rows[i].insertBefore(
    column2[i],
    rows[i].children[rows[i].children.length - 1],
  );
}
