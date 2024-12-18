'use strict';

const thead = document.querySelector('thead > tr');
const posTitleCol = thead.children[1].cloneNode(true);

thead.insertBefore(posTitleCol, thead.lastElementChild);

document.querySelectorAll('tbody > tr').forEach((row) => {
  const posCol = row.children[1].cloneNode(true);

  row.insertBefore(posCol, row.lastElementChild);
});

// thead.tr > new col name
// tbody.tr > new col woith same value as columgn 2
