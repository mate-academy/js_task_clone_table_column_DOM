'use strict';

// const head = document.querySelector('thead');
// const body = document.querySelector('tbody');
// const footer = document.querySelector('tfoot');

// function copyPaste(part) {
//   const collection = part.children;

//   for (let i = 0; i < collection.length; i++) {
//     const row = collection[i];
//     const copy = row.children[1].cloneNode(true);

//     row.children[4].before(copy);
//   }
// }

// copyPaste(head);
// copyPaste(body);
// copyPaste(footer);

const rowList = document.querySelectorAll('tr');

for (let i = 0; i < rowList.length; i++) {
  const row = rowList[i];
  const copy = row.children[1].cloneNode(true);

  row.children[4].before(copy);
}
