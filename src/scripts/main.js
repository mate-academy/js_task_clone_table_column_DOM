'use strict';

const topRow = document.querySelector('thead').children[0];
const bottomRow = document.querySelector('tfoot').children[0];

topRow.insertBefore(
  topRow.children[1].cloneNode(true), topRow.children[4]
);

bottomRow.insertBefore(
  bottomRow.children[1].cloneNode(true), bottomRow.children[4]
);

let counter = 0;
const bodyRowsAmount = document.querySelector('tbody').children.length;

while (counter < bodyRowsAmount) {
  const currentRow = document.querySelector('tbody').children[counter];

  currentRow.insertBefore(
    currentRow.children[1].cloneNode(true), currentRow.children[4]
  );

  counter++;
}
