'use strict';

// write your code here
const rows = document.querySelectorAll('table tr');

for (const i of rows) {
  const lastChild = i.querySelector(':last-child');
  const secondChild = i.querySelector(':nth-child(2)');
  const copySecondchild = document.createElement(secondChild.tagName);

  copySecondchild.innerText = secondChild.innerText;
  i.insertBefore(copySecondchild, lastChild);
}
