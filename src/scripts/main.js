'use strict';

const theadElem = document.querySelector('thead');
const tbodyElem = document.querySelector('tbody');
const tfootElem = document.querySelector('tfoot');

const makeCopy = function (tableElem) {
  const rows = tableElem.querySelectorAll('tr');

  rows.forEach((el) => {
    const positionElem = el.children[1];
    const positionElemClone = positionElem.cloneNode(true);

    const lastHeadElem = el.lastElementChild;

    el.insertBefore(positionElemClone, lastHeadElem);
  });
};

makeCopy(theadElem);
makeCopy(tbodyElem);
makeCopy(tfootElem);
