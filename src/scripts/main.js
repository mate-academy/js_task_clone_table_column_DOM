'use strict';

function copyColumn(from, to) {
  const fromColumn = document.querySelectorAll(`tr > :nth-child(${from})`);
  const toColumn = document.querySelectorAll(`tr > :nth-child(${to})`);

  return toColumn.forEach((element, i) => (
    toColumn[i].before(fromColumn[i].cloneNode(true))));
};

copyColumn(2, 5);
