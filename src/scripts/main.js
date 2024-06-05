'use strict';

// write your code here
document.querySelectorAll('tr').forEach((tr) => {
  const sChild = tr.children[1];
  const lChild = tr.children[4];
  const par = tr.parentElement;
  let nChild = '';

  if (par.tagName.toLowerCase() === 'tbody') {
    nChild = document.createElement('td');
  } else {
    nChild = document.createElement('th');
  }

  nChild.textContent = sChild.textContent;
  lChild.before(nChild);
});
