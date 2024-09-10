'use strict';

const table = document.querySelector('table');

copyColumn(table.tHead);
copyColumn(table.tBodies[0]);
copyColumn(table.tFoot);

function copyColumn(element) {
  [...element.children].forEach(row => {
    const boxes = row.children;

    boxes[boxes.length - 1]
      .insertAdjacentElement('beforebegin',
        boxes[1].cloneNode(true)
      );
  });
}
