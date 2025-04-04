'use strict';

const rows = [...document.querySelectorAll('tr')];

rows.forEach((row) => {
  const secondRow = row.firstElementChild.nextElementSibling.cloneNode(true);

  row.lastElementChild.before(secondRow);
});
