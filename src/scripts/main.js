'use strict';

const table = document.querySelector('table');

table.rows[0].cells[3].insertAdjacentHTML('afterend',
  `<th>${table.rows[0].cells[1].innerText}</th>`
);

for (let i = 1; i < table.rows.length - 1; i++) {
  table.rows[i].cells[3].insertAdjacentHTML('afterend',
    `<td>${table.rows[i].cells[1].innerText}</td>`
  );
}

table.rows[table.rows.length - 1].cells[3].insertAdjacentHTML('afterend',
  `<th>${table.rows[table.rows.length - 1].cells[1].innerText}</th>`
);
