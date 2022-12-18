'use strict';

const addElement = (element, collection) => {
  const newElement = collection.item(1).cloneNode(true);

  newElement.innerHTML = collection.item(1).innerHTML;

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
  const lastelement = elementsTbody[i].children
    .item(elementsTbody[i].children.length - 1);

  const newElement = elementsTbody[i].children.item(1).cloneNode(true);

  newElement.innerHTML = elementsTbody[i].children.item(1).innerHTML;

  elementsTbody[i].insertBefore(newElement, lastelement);
}
