'use strict';

const tr = document.querySelectorAll('tr');

function clone(tElem) {
  [...tElem].forEach(element => {
    const copy = element.children[1].cloneNode(true);

    element.children[3].after(copy);
  });
};

clone(tr);
