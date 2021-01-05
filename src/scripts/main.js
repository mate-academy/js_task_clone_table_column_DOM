'use strict';

const cells = [...document.querySelectorAll('tr')];

cells.forEach(cell => {
  cell.children[4].before(cell.children[1].cloneNode(true));
});
