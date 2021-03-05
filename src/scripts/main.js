'use strict';

const table = document.querySelector('table');
const cells = table.querySelectorAll('tr');

cells.forEach(cell => {
  return cell.children[3].after(cell.children[1].cloneNode(true));
}
);
