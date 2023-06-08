'use strict';

const rows = Array.from(document.querySelectorAll('tbody tr'));

rows.forEach(row => {
  const cells = Array.from(row.children);

  const extraPositionCell = document.createElement('td');

  extraPositionCell.textContent = cells[1].textContent;

  console.log(extraPositionCell.textContent);

  row.insertBefore(extraPositionCell, cells[4]);
});

const theadRow = document.querySelector('thead tr');
const tfootRow = document.querySelector('tfoot tr');

const newTh = document.createElement('th');

newTh.textContent = 'Position';

theadRow.insertBefore(newTh, theadRow.lastElementChild);

const newTf = document.createElement('th');

newTf.textContent = 'Position';

tfootRow.insertBefore(newTf, tfootRow.lastElementChild);
