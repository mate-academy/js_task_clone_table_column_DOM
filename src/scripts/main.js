'use strict';

const tbodyCollection = [...document.querySelectorAll('tbody tr')];
const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');
const positionHead = thead.querySelector('th:nth-child(2)');
const positionFoot = tfoot.querySelector('th:nth-child(2)');
const fourthElementHead = thead.querySelector('th:nth-child(4)');
const fourthElementFoot = tfoot.querySelector('th:nth-child(4)');
const copyOfPositionHead = positionHead.cloneNode(true);
const copyOfPositionFoot = positionFoot.cloneNode(true);

fourthElementHead.insertAdjacentElement('afterend', copyOfPositionHead);
fourthElementFoot.insertAdjacentElement('afterend', copyOfPositionFoot);

tbodyCollection.forEach((tr) => {
  const newTd = document.createElement('td');

  newTd.textContent = tr.children[1].textContent;

  const lastTd = tr.querySelector('td:last-child');

  lastTd.insertAdjacentElement('beforebegin', newTd);
});
