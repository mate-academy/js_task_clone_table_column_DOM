'use strict';

// Створюємо заголовкову комірку
function createHeaderCell(text) {
  const th = document.createElement('th');
  th.textContent = text;
  return th;
}

// Створюємо комірку в рядку з певним значенням
function createDataCell(text) {
  const td = document.createElement('td');
  td.textContent = text;
  return td;
}

// Вставляємо нову комірку перед n-тим елементом (або в кінець)
function insertCellBefore(parentRow, newCell, index) {
  const cells = parentRow.children;
  if (cells.length > index) {
    parentRow.insertBefore(newCell, cells[index]);
  } else {
    parentRow.appendChild(newCell);
  }
}

// ---------- thead ----------
const thead = document.querySelector('thead');
const headRow = thead.querySelector('tr');
const newHeadCell = createHeaderCell('Position');
insertCellBefore(headRow, newHeadCell, 4);

// ---------- tbody ----------
const tbody = document.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');

rows.forEach(row => {
  const tds = row.querySelectorAll('td');
  const newDataCell = createDataCell(tds[1].textContent); // копіюємо "Position"
  insertCellBefore(row, newDataCell, 4);
});

// ---------- tfoot ----------
const tfoot = document.querySelector('tfoot');
const footRow = tfoot.querySelector('tr');
const newFootCell = createHeaderCell('Position');
insertCellBefore(footRow, newFootCell, 4);
