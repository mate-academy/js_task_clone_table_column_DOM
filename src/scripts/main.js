'use strict';

const rows = document.querySelectorAll('tr');

const copyCol = (elem) => {
  const item = elem.firstElementChild.nextElementSibling;

  elem.lastElementChild.before(item.cloneNode(true));
};

for (const item of rows) {
  copyCol(item);
}
