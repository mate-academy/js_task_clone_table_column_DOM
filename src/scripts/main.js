'use strict';

const tableData = createDataArr('tr');
const table = () => {
  const newTable = [];

  for (let i = 0; i < tableData.length; i++) {
    (i === 0 || i === tableData.length - 1)
      ? newTable.push(getRowTexts('th', i))
      : newTable.push(getRowTexts('td', i));
  }

  return newTable;
};

for (let i = 0; i < table().length; i++) {
  (i === 0 || i === table().length - 1)
    ? insertNewCol('th', i)
    : insertNewCol('td', i);
}

function findRow(tagName, index) {
  return createDataArr(tagName).filter(
    col => tableData[index].contains(col)
  );
}

function getRowTexts(tagName, index) {
  const row = findRow(tagName, index);

  return row.map(col => col.innerText);
}

function insertNewCol(tagName, index) {
  const newCol = document.createElement(tagName);
  const lastCol = findRow(tagName, index).splice(-1, 1)[0];

  newCol.innerText = table()[index][1];

  lastCol.insertAdjacentElement('beforebegin', newCol);
}

function createDataArr(tagName) {
  return [...document.querySelectorAll(tagName)];
}
