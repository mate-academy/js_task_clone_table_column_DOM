'use strict';

// write your code here
for (const tr of document.querySelectorAll('tr')) {
  const el = tr.children[0].nodeName.toLowerCase();
  const newTd = document.createElement(`${el}`);

  newTd.textContent = tr.children[1].textContent;

  tr.children[tr.children.length - 2].after(newTd);
}
