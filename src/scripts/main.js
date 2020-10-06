'use strict';

const rows = [...document.querySelectorAll('tr')];

rows.forEach(row => {
  let rowElements = row.querySelectorAll('td');

  if (rowElements.length === 0) {
    rowElements = row.querySelectorAll('th');

    const newTh = document.createElement('th');

    newTh.innerText = rowElements[1].innerText;

    const lastColumn = rowElements[rowElements.length - 1];

    delete rowElements[rowElements.length - 1];

    row.append(newTh);
    row.append(lastColumn);
  } else {
    const newTd = document.createElement('td');

    newTd.innerText = rowElements[1].innerText;

    const lastColumn = rowElements[rowElements.length - 1];

    delete rowElements[rowElements.length - 1];

    row.append(newTd);
    row.append(lastColumn);
  };
});
