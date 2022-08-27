'use strict';

const tHead = document.querySelector('thead').children[0];
const tBody = document.querySelector('tbody').children;
const tFoot = document.querySelector('tfoot').children[0];

let counter = 0;

function copyPaste(elem) {
  const trElem = elem.children[1].cloneNode(true);

  elem.insertBefore(trElem, elem.children[4]);

  if (counter === 0) {
    for (const key of tBody) {
      const trBody = key.children[1].cloneNode(true);

      key.insertBefore(trBody, key.children[4]);
    }
  }
  counter++;
};

copyPaste(tHead);
copyPaste(tFoot);
