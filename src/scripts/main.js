const ro = document.querySelector('table');

for (const row of ro.rows) {
  const cloun = row.cells[1].cloneNode(true);

  row.cells[4].before(cloun);
}
