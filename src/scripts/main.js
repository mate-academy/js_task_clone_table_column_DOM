'use strict';

const htmlTableRows = [...document.querySelector('table').rows];

htmlTableRows.forEach((row) => {
  if (row.childElementCount > 1) {
    const cloneElement = row.children[1].cloneNode(true);

    row.lastElementChild.before(cloneElement);
  }
});
