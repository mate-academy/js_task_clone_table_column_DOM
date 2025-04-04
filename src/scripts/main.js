'use strict';

const list = document.querySelectorAll('td');
const arrOfList = [];

for (let i = 1; i < list.length; i += 5) {
  arrOfList.push(list[i]);
}

const newCol = document.querySelectorAll('th')[3];
const clone = document.querySelectorAll('th')[1].cloneNode(true);

newCol.after(clone);

let j = 0;

for (let i = 4; i < document.querySelectorAll('td').length; i += 6) {
  const temp = document.querySelectorAll('td')[i];
  const clonedTemp = arrOfList[j].cloneNode(true);

  temp.before(clonedTemp);
  j++;
}

const newLOwerCol = document.querySelectorAll('th')[9];
const cloned = document.querySelectorAll('th')[7].cloneNode(true);

newLOwerCol.after(cloned);
