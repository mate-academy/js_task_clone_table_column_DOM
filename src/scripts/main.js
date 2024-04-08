'use strict';

const table = document.querySelector('table');

const rowElements = table.querySelectorAll('tr');

rowElements.forEach((elem) => {
  const copyElem = elem.cells[1].cloneNode(true);

  elem.cells[3].after(copyElem);
});
