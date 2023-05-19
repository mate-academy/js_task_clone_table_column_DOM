'use strict';

const tHeader = document.querySelectorAll('th');
const indexOfTh = [...tHeader].findIndex(x => x.textContent === 'Position');

const tRows = document.querySelectorAll('tr');

for (const x of tRows) {
  const copyElem = x.children[indexOfTh].cloneNode(true);

  x.lastElementChild.before(copyElem);
}
