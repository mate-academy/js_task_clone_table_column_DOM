'use strict';

const element = document.querySelector('table');

for (let i = 0; i < element.rows.length; i++) {
  const column = element.rows[i].cells[1].cloneNode(true);

  element.rows[i].insertBefore(column, element.rows[i].children[4]);
}
