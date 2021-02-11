'use strict';

// write your code here
const table = document.querySelector('table');

[...table.children].forEach((block) => {
  [...block.children].forEach((tr) => {
    const newTd = document.createElement(`${tr.children[1].nodeName}`);

    newTd.innerText = tr.children[1].innerText;
    tr.insertBefore(newTd, tr.children[4]);
  });
});
