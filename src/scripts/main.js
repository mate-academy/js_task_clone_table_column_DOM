'use strict';

const tableElem = document.getElementsByTagName('tr');

[...tableElem].forEach(element => {
  const copy = element.cells[1];

  element.children[3].after(copy.cloneNode(true));
});
