'use strict';

'use strict';

// write your code here

const theadRow = document.querySelector('thead tr');
const ths = theadRow?.querySelectorAll('th');

if (ths?.length >= 2 && !theadRow.classList.contains('cloned-column-added')) {
  const copiedTh = ths[1].cloneNode(true);

  theadRow.insertBefore(copiedTh, ths[2]);
  theadRow.classList.add('cloned-column-added');

  const rows = document.querySelectorAll('tbody tr');

  rows.forEach((row) => {
    const tds = row.querySelectorAll('td');

    if (tds.length >= 2 && !row.classList.contains('cloned-column-added')) {
      const copiedTd = tds[1].cloneNode(true);

      row.insertBefore(copiedTd, tds[2]);
      row.classList.add('cloned-column-added');
    }
  });
}

const tfootRow = document.querySelector('tfoot tr');
const tfs = tfootRow?.querySelectorAll('th');

if (tfs?.length >= 2 && !tfootRow.classList.contains('cloned-column-added')) {
  const copiedTf = tfs[1].cloneNode(true);

  tfootRow.insertBefore(copiedTf, tfs[2]);
  tfootRow.classList.add('cloned-column-added');
}
