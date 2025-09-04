'use strict';

const elementsThead = document.querySelectorAll('table');

for (const table of elementsThead) {
  const elementsTheadTr = table.querySelectorAll('thead tr');

  for (const theadTr of elementsTheadTr) {
    const stringsTheadTh = theadTr.querySelectorAll('th');

    if (stringsTheadTh.length >= 2) {
      const cloneTheadTh = stringsTheadTh[1].cloneNode(true);

      theadTr.insertBefore(cloneTheadTh, theadTr.lastElementChild);
    }
  }

  const elementsTbodyTr = table.querySelectorAll('tbody tr');

  for (const row of elementsTbodyTr) {
    const stringsTbodyTd = row.querySelectorAll('td');

    if (stringsTbodyTd.length >= 2) {
      const cloneTbodyTd = stringsTbodyTd[1].cloneNode(true);

      row.insertBefore(cloneTbodyTd, row.lastElementChild);
    }
  }

  const elementsTfootTr = table.querySelectorAll('tfoot tr');

  for (const tfootTr of elementsTfootTr) {
    const stringsTfootTh = tfootTr.querySelectorAll('th');

    if (stringsTfootTh.length >= 2) {
      const cloneTfootTh = stringsTfootTh[1].cloneNode(true);

      tfootTr.insertBefore(cloneTfootTh, tfootTr.lastElementChild);
    }
  }
}
