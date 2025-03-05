'use strict';

// Top TH
const getTopHead = document.querySelector('thead tr');
const newTopTh = document.createElement('th');

newTopTh.innerText = getTopHead.children[1].innerText;
getTopHead.children[3].after(newTopTh);

// Bottom TH
const getBottomHead = document.querySelector('tfoot tr');
const newBottomTh = document.createElement('th');

newBottomTh.innerText = getBottomHead.children[1].innerText;
getBottomHead.children[3].after(newBottomTh);

// Adding List
const positionsList = document.querySelectorAll('tbody tr');

positionsList.forEach((item) => {
  const newTd = document.createElement('td');

  newTd.innerText = item.children[1].innerText;

  item.children[3].after(newTd);
});
