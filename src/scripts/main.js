'use strict';

const table = document.querySelector('table');

const tableRows = [...table.children]
  .map((val) => {
    return [...val.children];
  })
  .flat();

const secondColumnValues = tableRows.map((val) => {
  return [...val.children][1].textContent;
});

tableRows.forEach((val, i) => {
  const tableData =
    i === 0 || i === tableRows.length - 1
      ? document.createElement('th')
      : document.createElement('td');

  tableData.textContent = secondColumnValues[i];
  val.lastElementChild.previousSibling.after(tableData);
});
