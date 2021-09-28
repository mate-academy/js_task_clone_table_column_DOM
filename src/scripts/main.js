'use strict';

// write your code here
/*
code is much shorter for a particular task (lines 21-26),
but i wanted to expand the functionality to enable
picking which column to copy and where to paste
*/
const tRows = document.querySelectorAll('tr');
const tHead = [...document.querySelector('thead').querySelectorAll('th')];

function getIndex(lookup) {
  return tHead.map(value => value.innerText.toLowerCase())
    .indexOf(lookup.toLowerCase());
}

function copyColumn(colName, pasteBeforeColumnName) {
  const copyIndex = getIndex(colName);
  const pasteBeforeIndex = getIndex(pasteBeforeColumnName);

  for (let i = 0; i < tRows.length; i++) {
    const toPaste = tRows[i].children[copyIndex];

    tRows[i].children[pasteBeforeIndex]
      .before(toPaste.cloneNode(true));
  }
}

copyColumn('position', 'salary');
