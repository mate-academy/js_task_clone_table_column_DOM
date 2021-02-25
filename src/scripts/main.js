'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableFoot = document.querySelector('tfoot');

const clonedPositionHead = tableHead.firstElementChild.children[1]
  .cloneNode(true);
const clonedPositionFoot = tableFoot.firstElementChild.children[1]
  .cloneNode(true);

[...tableBody.children].forEach(elem => {
  const clonedPositionBody = elem.children[1].cloneNode(true);

  elem.lastElementChild.before(clonedPositionBody);
});

tableHead.firstElementChild.lastElementChild.before(clonedPositionHead);
tableFoot.firstElementChild.lastElementChild.before(clonedPositionFoot);
