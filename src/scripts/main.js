'use strict';

[...document.getElementsByTagName('tr')].forEach((tr, index, arr) => {
  const newTH = document.createElement('th');
  const newTD = document.createElement('td');

  if (index === 0 || index === arr.length - 1) {
    newTH.innerHTML = tr.children[1].innerHTML;
    tr.append(newTH);
  } else {
    newTD.innerHTML = tr.children[1].innerHTML;
    tr.append(newTD);
  }

  tr.append(tr.children[4]);
});
