'use strict';

// 1. Pobieramy wszystkie wiersze z tabeli (z sekcji thead, tbody oraz tfoot)
const allRows = document.querySelectorAll('table tr');

allRows.forEach((row) => {
  // 2. Pobieramy wszystkie komórki w danym wierszu (th lub td)
  const cells = row.cells;

  // 3. Klonujemy drugą kolumnę (indeks 1, ponieważ liczymy od 0)
  // Parametr 'true' oznacza głębokie kopiowanie wraz z zawartością tekstową
  const columnToClone = cells[1];
  const clonedCell = columnToClone.cloneNode(true);

  // 4. Znajdujemy ostatnią kolumnę w tym wierszu
  const lastCell = cells[cells.length - 1];

  // 5. Wstawiamy sklonowaną komórkę bezpośrednio przed ostatnią kolumnę
  row.insertBefore(clonedCell, lastCell);
});
