'use strict';
copiedColumn();

function copiedColumn() {
  const allTr = [...document.querySelectorAll('tr')];

  for (let i = 0; i < allTr.length; i++) {
    const copiedData = allTr[i].children[1];
    const newTh = (i === 0 || i === allTr.length - 1)
      ? document.createElement('th')
      : document.createElement('td');

    newTh.textContent = copiedData.textContent;
    allTr[i].insertBefore(newTh, allTr[i].children[4]);
  };
};
