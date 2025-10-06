'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const thead = table.querySelector('thead');
  const tfoot = table.querySelector('tfoot');
  const tbody = table.querySelector('tbody');

  function cloneColumn(section) {
    if (!section) {
      return;
    }

    const trAll = Array.from(section.querySelectorAll('tr'));

    trAll.forEach((tr) => {
      if (tr.children.length > 1) {
        const clone = tr.children[1];
        const cell = clone.cloneNode(true);

        tr.insertBefore(cell, tr.children[tr.children.length - 1]);
      }
    });
  }

  const sections = [thead, tfoot, tbody];

  sections.forEach((section) => cloneColumn(section));
});
