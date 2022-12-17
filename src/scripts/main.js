'use strict';

let cloneElem;

const trCollection = document.querySelectorAll('tr');

for (let i = 0; i < trCollection.length; i++) {
  const currentElem = trCollection[i];

  cloneElem = currentElem.children[1].cloneNode(true);
  currentElem.children[4].before(cloneElem);
};
