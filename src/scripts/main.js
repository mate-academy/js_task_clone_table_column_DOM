'use strict';

const tableElem = document.querySelector('table');
const tHead = tableElem.firstElementChild;
const tBodyList = [...tHead.nextElementSibling.children];
const tFoot = tableElem.lastElementChild;

const copyCol = (elem) => {
  const item = elem.firstElementChild.nextElementSibling;

  elem.lastElementChild.before(item.cloneNode(true));
};

copyCol(tHead.firstElementChild);
copyCol(tFoot.firstElementChild);

for (const item of tBodyList) {
  copyCol(item);
}
