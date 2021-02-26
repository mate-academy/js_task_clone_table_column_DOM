'use strict';

const thead = document.querySelector('thead tr');
const tfoot = document.querySelector('tfoot tr');
const tbody = document.querySelector('tbody').children;

const whomClone = 1;
const wherePut = 4;

const putingTitle = (titleRow) => {
  const titleItem = titleRow.children[whomClone].cloneNode('deep');

  titleRow.insertBefore(titleItem, titleRow.children[wherePut]);
};

putingTitle(thead);
putingTitle(tfoot);

for (let i = 0; i < tbody.length; i++) {
  tbody[i]
    .insertBefore(tbody[i].children[whomClone].cloneNode('deep')
      , tbody[i].children[wherePut]);
}
