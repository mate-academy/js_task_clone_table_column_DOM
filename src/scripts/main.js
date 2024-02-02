'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const table = document.querySelector('table');

  const headerRow = table.querySelector('thead tr');

  const newPositionHeader = document.createElement('th');

  newPositionHeader.innerText = 'Position';

  const salaryHeader = headerRow.querySelector('th:last-child');

  salaryHeader.parentNode.insertBefore(newPositionHeader, salaryHeader);

  const footerRow = table.querySelector('tfoot tr');

  const newPositionFooter = document.createElement('th');

  newPositionFooter.innerText = 'Position';

  const salaryFooter = footerRow.querySelector('th:last-child');

  salaryFooter.parentNode.insertBefore(newPositionFooter, salaryFooter);

  const rows = Array.from(
    table.getElementsByTagName('tbody')[0].getElementsByTagName('tr'),
  );

  rows.forEach(row => {
    const position = row.getElementsByTagName('td')[1].innerText;

    const newPositionCell = document.createElement('td');

    newPositionCell.innerText = position;

    const salaryCell = row.getElementsByTagName('td')[4];

    salaryCell.parentNode.insertBefore(newPositionCell, salaryCell);
  });
});
