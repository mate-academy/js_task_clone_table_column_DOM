"use strict";

const rows = document.querySelectorAll("tr");

rows.forEach((row, index) => {
  const positionCellContent = row.cells[1].textContent;

  if (index === 0 || index === rows.length - 1) {
    const th = document.createElement("th");

    th.textContent = positionCellContent;
    row.insertBefore(th, row.cells[row.cells.length - 1]);
  } else {

    const td = document.createElement("td");

    td.textContent = positionCellContent;
    row.insertBefore(td, row.cells[row.cells.length - 1]);
  }
});
