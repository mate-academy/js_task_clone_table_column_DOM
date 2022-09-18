'use strict';

const trs = document.querySelectorAll('tr');

for (const tr of trs) {
  let positionClone 
  if (tr.children[1].tagName === 'TH') {
    positionClone = document.createElement('th');
  }
  if (tr.children[1].tagName === 'TD') {
    positionClone = document.createElement('td');
  }

  positionClone.innerHTML = tr.children[1].innerHTML;
  tr.children[3].after(positionClone);
}
