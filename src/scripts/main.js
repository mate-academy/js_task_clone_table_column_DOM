'use strict';

function copypaste(c, p) {
  const table = document.querySelectorAll('tr');

  table.forEach((tr) => {
    const oldRow = [...tr.children];
    const newRow = [...oldRow.slice(0, p), oldRow[c - 1], ...oldRow.slice(p)];

    tr.innerHTML = '';

    newRow.forEach((th) => {
      tr.append(th.cloneNode(true));
    });
  });
}

copypaste(2, 4);
