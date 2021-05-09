'use strict';

const allRow = [...document.querySelectorAll('tr')];

function clone(nameOfClone, insertAfter) {
  const clonePosition = [...allRow[0].children]
    .findIndex(item => item.outerText === nameOfClone);
  const pastePosition = [...allRow[0].children]
    .findIndex(item => item.outerText === insertAfter) + 1;

  for (let i = 0; i < allRow.length; i++) {
    allRow[i].insertBefore(allRow[i].children[clonePosition].cloneNode(true),
      allRow[i].children[pastePosition]);
  }
}

clone('Position', 'Age');
