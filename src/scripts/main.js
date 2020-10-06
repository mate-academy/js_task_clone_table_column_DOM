'use strict';

const rows = [...document.querySelectorAll('tr')];

rows.forEach(row => {
  let rowElements = row.querySelectorAll('td');
  let newTd;

  if (rowElements.length === 0) {
    rowElements = row.querySelectorAll('th');

    newTd = document.createElement('th');
  } else {
    newTd = document.createElement('td');
  };
  newTd.innerText = rowElements[1].innerText;

  const lastColumn = rowElements[rowElements.length - 1];

  delete rowElements[rowElements.length - 1];

  row.append(newTd);
  row.append(lastColumn);
});
