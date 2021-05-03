'use strict';

const headTr = document.querySelector('thead').children[0];
const footTr = document.querySelector('tfoot').children[0];
const body = document.querySelector('tbody');

headTr.children[4].before(headTr.children[1].cloneNode(true));
footTr.children[4].before(footTr.children[1].cloneNode(true));

for (let i = 0; i < body.children.length; i++) {
  const position = body.children[i].children[1];

  body.children[i].children[4].before(position.cloneNode(true));
}
