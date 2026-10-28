'use strict';

const tabela = document.querySelector('table');
const wiersze = Array.from(tabela.rows);

wiersze.forEach((row) => {
  const komorka = row.cells[1];
  const kopia = komorka.cloneNode(true);

  row.insertBefore(kopia, row.cells[row.cells.length - 1]);
});
