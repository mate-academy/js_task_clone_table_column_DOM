'use strict';

const thead = document.querySelector('thead').children;
const tbody = document.querySelector('tbody').children;
const tfoot = document.querySelector('tfoot').children;

function clone(tElem) {
  [...tElem].forEach(element => {
    const copy = element.children[1].cloneNode(true);

    element.children[3].after(copy);
  });
};

clone(thead);
clone(tbody);
clone(tfoot);
