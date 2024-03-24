'use strict';

const tr = document.querySelectorAll('tr');

tr.forEach((element) => {
  element.lastElementChild.insertAdjacentElement(
    'beforeBegin',
    element.cells[1].cloneNode(true),
  );
});
