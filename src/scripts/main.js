'use strict';

const givePosition = [...document.querySelectorAll('tr')]
  .map(person => person.children[1]);

const giveAllTr = [...document.querySelectorAll('tr')];

function getItem(str) {
  if (str === givePosition[0].innerText
  || str === givePosition[givePosition.length - 1].innerText) {
    return `<th>${str}</th>`;
  }

  return `<td>${str}</td>`;
}

for (let i = 0; i < givePosition.length; i++) {
  giveAllTr[i].children[giveAllTr[i].children.length - 2]
    .insertAdjacentHTML('afterend', getItem(givePosition[i].innerText));
};
