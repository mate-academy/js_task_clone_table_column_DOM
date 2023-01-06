'use strict';

const trElements = [...document.querySelectorAll('tr')];

trElements.forEach((tr, i, arr) => {
  let cloneCell = document.createElement('td');

  if (tr.children[0].tagName === 'TH') {
    cloneCell = document.createElement('th');
  }

  cloneCell.textContent = [...tr.children][1].textContent;
  tr.children[4].before(cloneCell);
});
