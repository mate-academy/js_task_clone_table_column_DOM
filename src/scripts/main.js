'use strict';

const trElem = document.querySelectorAll('tr');

for (const elem of [...trElem]) {
  const copyCell = [...elem.cells][1].cloneNode(true);

  elem.insertBefore(copyCell, [...elem.cells][4]);
}
