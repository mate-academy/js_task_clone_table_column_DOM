'use strict';

const tableRows = [...document.querySelectorAll('tr')];

tableRows.forEach((row) => {
  const clonePosition = row.children[1].cloneNode(true);

  row.children[4].before(clonePosition);
});
