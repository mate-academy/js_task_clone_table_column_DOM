'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table'); // Pobieramy tabelę
  if (!table) return; // jeśli nie ma tabeli, kończymy

  const indexToCopy = 1; // druga kolumna (Position)
  const indexToPaste = table.querySelector('thead tr').children.length - 1; // przed ostatnią kolumną

  // Kopiowanie nagłówków thead
  const theadRow = table.querySelector('thead tr');
  const thClone = theadRow.children[indexToCopy].cloneNode(true); // cloneNode(true) kopiuje tekst i strukturę
  theadRow.insertBefore(thClone, theadRow.children[indexToPaste]);

  // Kopiowanie komórek w każdym wierszu tbody
  const tbodyRows = table.querySelectorAll('tbody tr');
  tbodyRows.forEach(row => {
    const tdClone = row.children[indexToCopy].cloneNode(true);
    row.insertBefore(tdClone, row.children[indexToPaste]);
  });

  // Kopiowanie nagłówków tfoot
  const tfootRow = table.querySelector('tfoot tr');
  const tfClone = tfootRow.children[indexToCopy].cloneNode(true);
  tfootRow.insertBefore(tfClone, tfootRow.children[indexToPaste]);
});
