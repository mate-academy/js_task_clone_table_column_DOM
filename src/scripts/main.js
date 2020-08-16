'use strict';

for (const element of [...document.querySelectorAll('tr *:nth-child(2)')]) {
  const clone = document.createElement(`${element.tagName}`);

  clone.innerHTML = element.innerHTML;

  element.parentNode.insertBefore(clone, element.parentNode.children[4]);
};
