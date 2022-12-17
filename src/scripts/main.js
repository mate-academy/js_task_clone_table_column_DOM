'use strict';

const addElement = (element, collection) => {
  const newElement = document.createElement('th');

  newElement.innerHTML = 'Position';

  element.parentNode
    .insertBefore(newElement, collection.item(collection.length - 1));
};

const elementsHead = document
  .querySelector('thead')
  .querySelector('tr').children;

addElement(elementsHead
  .item(elementsHead.length - 1), elementsHead);

const elementsFoot = document
  .querySelector('tfoot')
  .querySelector('tr').children;

addElement(elementsFoot
  .item(elementsFoot.length - 1), elementsFoot);

const elementsTbody = document.querySelector('tbody').children;

for (let i = 0; i < elementsTbody.length; i++) {
  const cloneText = elementsTbody[i].children.item(1).innerHTML;
  const lastelement = elementsTbody[i].children
    .item(elementsTbody[i].children.length - 1);

  const newElement = document.createElement('td');

  newElement.innerHTML = cloneText;

  elementsTbody[i].insertBefore(newElement, lastelement);
}
