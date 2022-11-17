'use strict';

const table = document.body.firstElementChild;

const trTableHead = table.querySelector('thead').rows[0];

trTableHead.cells[4].before(trTableHead.cells[1].cloneNode(true));

const trTableBody = table.querySelector('tbody').rows;

[ ...trTableBody ].forEach(tr => {
  tr.cells[4].before(tr.cells[1].cloneNode(true));
});

const trTableFoot = table.querySelector('tfoot').rows[0];

trTableFoot.cells[4].before(trTableFoot.cells[1].cloneNode(true));
