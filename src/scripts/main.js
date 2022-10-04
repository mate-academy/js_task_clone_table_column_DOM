'use strict';

const tableBody = document.querySelector('tbody');
const tableHead = document.querySelector('thead > tr');
const thList = tableHead.querySelectorAll('th');

const clonedColumn = thList[1].cloneNode(true);

tableHead.replaceChild(clonedColumn, thList[thList.length - 1]);

const copiedSalary = thList[thList.length - 1].cloneNode(true);

tableHead.appendChild(copiedSalary);

const chNodes = tableBody.children;

for (const data of chNodes) {
  const tData = data.querySelectorAll('td');
  const position = tData[1].cloneNode(true);

  data.replaceChild(position, tData[tData.length - 1]);

  const copiedSalaryTd = tData[tData.length - 1].cloneNode(true);

  data.appendChild(copiedSalaryTd);
}
