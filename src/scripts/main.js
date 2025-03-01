'use strict';

const table = document.querySelector('table');
const sections = [
  table.querySelector('thead'),
  table.querySelector('tbody'),
  table.querySelector('tfoot'),
];

sections.forEach((section) => {
  section.querySelectorAll('tr').forEach((row) => {
    const currentPosition = row.querySelectorAll('td, th');
    const cloned = currentPosition[1].cloneNode(true);

    row.insertBefore(cloned, currentPosition[currentPosition.length - 1]);
  });
});
