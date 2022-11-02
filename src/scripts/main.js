'use strict';

const tr = [...document.querySelectorAll('tr')];
const addElements = [...document.querySelectorAll('tr > :nth-child(2)')];

tr.forEach((el, i) => {
  el.children[4].before(addElements[i].cloneNode(true));
});
