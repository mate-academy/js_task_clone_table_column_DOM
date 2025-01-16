'use strict';

function cloneCeil(elements) {
  const array = elements.map((el) => el.innerText);

  array.splice(-1, 0, array[1]);

  return array;
}

function insertToDom(element, create) {
  const newElement = cloneCeil([...element.children]);

  [...element.children].forEach((el) => el.remove());

  newElement.forEach((item) => {
    const newItem = document.createElement(create);

    newItem.innerText = item;

    element.insertAdjacentElement('beforeend', newItem);
  });
}

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');
const theadTr = thead.firstElementChild;
const tfootTr = tfoot.firstElementChild;
const tbodyAllTr = [...tbody.children];

insertToDom(theadTr, 'th');
insertToDom(tfootTr, 'th');

tbodyAllTr.map((tbodyTr) => insertToDom(tbodyTr, 'td'));
