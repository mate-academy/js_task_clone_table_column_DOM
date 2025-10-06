'use strict';

const tableBody = [...document.querySelector('tbody').children];
const tableHead = [...document.querySelector('thead').children];
const tableFoot = [...document.querySelector('tfoot').children];

const mapping = [...tableHead[0].children].map(
  (item) => item.textContent.toLowerCase(),
  // eslint-disable-next-line function-paren-newline
);

const mapObj = mapping.reduce((acc, key, index) => {
  acc[key] = index;

  return acc;
}, {});

function copyPaste(table, copy, pasteAfter) {
  table.forEach((row) => {
    const bufferText = row.children[copy].textContent;
    const paste = row.children[pasteAfter];
    const copyEl = document.createElement(row.lastElementChild.tagName);

    copyEl.textContent = bufferText;
    paste.after(copyEl);
  });
}

copyPaste(tableBody, mapObj.position, mapObj.age);
copyPaste(tableHead, mapObj.position, mapObj.age);
copyPaste(tableFoot, mapObj.position, mapObj.age);
