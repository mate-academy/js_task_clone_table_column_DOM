'use strict';

const row = document.querySelectorAll('tr');
const position = [];

row.forEach((el, index) => {
  position.push(el.cells[1].outerHTML);

  const column = position[index];

  el.cells[3].insertAdjacentHTML('afterend', column);
});
