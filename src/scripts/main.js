'use strict';

// --- thead ---
const theadRow = document.querySelector('thead tr');
const ths = theadRow.querySelectorAll('th');
const thArray = Array.from(ths);
const cloneTh = thArray[1].cloneNode(true);

theadRow.insertBefore(cloneTh, thArray[thArray.length - 1]);

// --- tbody ---
const tbody = document.querySelector('tbody');

tbody.querySelectorAll('tr').forEach((tr) => {
  const tds = tr.querySelectorAll('td');
  const cloneTd = tds[1].cloneNode(true);

  tr.insertBefore(cloneTd, tds[tds.length - 1]);
});

// --- tfoot ---
const tfootRow = document.querySelector('tfoot tr');
const tfThs = tfootRow.querySelectorAll('th');
const cloneTf = tfThs[1].cloneNode(true);

tfootRow.insertBefore(cloneTf, tfThs[tfThs.length - 1]);
