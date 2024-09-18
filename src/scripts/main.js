'use strict';

const table = [...document.getElementsByTagName('tr')];

table.forEach((column) => {
  const lastChild = column.lastElementChild;
  const copy = column.children[1].cloneNode(true);

  lastChild.insertAdjacentElement('beforebegin', copy);
});
