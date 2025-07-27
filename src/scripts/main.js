'use strict';

const thead = document.getElementsByTagName('tr');

const asArrThead = Array.from(thead);

// console.log(asArrThead);

const forthColumn = [];
const position = [];

for (const row of asArrThead) {
  const fourthHeadFoot = row.getElementsByTagName('th')[3];
  const fourthBody = row.getElementsByTagName('td')[3];

  const secondHeadFoot = row.getElementsByTagName('th')[1];
  const secondBody = row.getElementsByTagName('td')[1];

  if (fourthHeadFoot) {
    forthColumn.push(fourthHeadFoot);
    position.push(secondHeadFoot.innerHTML);
  }

  if (fourthBody) {
    forthColumn.push(fourthBody);
    position.push(secondBody.innerHTML);
  }
}

let i = 0;
let newData;

for (const data of forthColumn) {
  if (data.tagName.toLocaleLowerCase() === 'th') {
    newData = document.createElement('th');
  }

  if (data.tagName.toLocaleLowerCase() === 'td') {
    newData = document.createElement('td');
  }

  newData.textContent = position[i];
  i++;
  data.after(newData);
}
