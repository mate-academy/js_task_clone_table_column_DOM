'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const table = document.querySelector('table');

  const headerRow = table.querySelector('thead tr');
  const headerPosition = headerRow.getElementsByTagName('th')[1];

  const clonedHeaderPosition = headerPosition.cloneNode(true);

  const salaryHeader = headerRow.querySelector('th:last-child');

  salaryHeader.parentNode.insertBefore(clonedHeaderPosition, salaryHeader);

  const footerRow = table.querySelector('tfoot tr');
  const footerPosition = footerRow.getElementsByTagName('th')[1];

  const clonedFooterPosition = footerPosition.cloneNode(true);

  const salaryFooter = footerRow.querySelector('th:last-child');

  salaryFooter.parentNode.insertBefore(clonedFooterPosition, salaryFooter);

  const rows = Array.from(
    table.getElementsByTagName('tbody')[0].getElementsByTagName('tr'),
  );

  rows.forEach(row => {
    const position = row.getElementsByTagName('td')[1];
    const clonedPosition = position.cloneNode(true);

    const salaryCell = row.getElementsByTagName('td')[4];

    salaryCell.parentNode.insertBefore(clonedPosition, salaryCell);
  });
});
