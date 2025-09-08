'use strict';

const tBody = document.querySelector('table tbody');
const tFoot = document.querySelector('table tfoot');
const tHead = document.querySelector('table thead');

function getVertLine(tableBody, tableHead, tableFoot, lineIndex) {
  if (
    typeof tableBody !== 'object' ||
    typeof tableHead !== 'object' ||
    typeof tableFoot !== 'object' ||
    typeof lineIndex !== 'number'
  ) {
    return null;
  }

  const rows = [...tableBody.rows];

  const bodyElems = rows.map((tr) => {
    const neededTd = tr.cells[lineIndex];

    if (neededTd !== null && typeof neededTd !== 'undefined') {
      return neededTd;
    }

    return null;
  });

  return [
    tableHead.rows[0].cells[lineIndex],
    bodyElems,
    tableFoot.rows[0].cells[lineIndex],
  ];
}

function pasteLine(
  tableBody,
  tableHead,
  tableFoot,
  [thHead, tdsBody, thFoot],
  indexToPaste,
) {
  const bodyRows = [...tableBody.rows];
  const headerRow = [...tableHead.rows][0];
  const footerRow = [...tableFoot.rows][0];

  const headerCellToMove = headerRow.cells[indexToPaste];
  const footerCellToMove = footerRow.cells[indexToPaste];

  if (
    typeof headerCellToMove === 'undefined' ||
    headerCellToMove === null ||
    typeof footerCellToMove === 'undefined' ||
    footerCellToMove === null
  ) {
    return;
  }

  headerCellToMove.insertAdjacentElement('beforebegin', thHead.cloneNode(true));
  footerCellToMove.insertAdjacentElement('beforebegin', thFoot.cloneNode(true));

  if (bodyRows.length === tdsBody.length) {
    for (let i = 0; i < tdsBody.length; i++) {
      if (typeof tdsBody[i] === 'undefined' && tdsBody[i] === null) {
        continue;
      }

      const tdToMove = bodyRows[i].cells[indexToPaste];

      if (typeof tdToMove !== 'object') {
        continue;
      }

      tdToMove.insertAdjacentElement('beforebegin', tdsBody[i].cloneNode(true));
    }
  }
}

function getIndex(tableElem) {
  const headerRow = [...tableElem.rows][0];

  return headerRow.cells.length - 1;
}

const inxToPaste = getIndex(tBody);

const line = getVertLine(tBody, tHead, tFoot, 1);

pasteLine(tBody, tHead, tFoot, line, inxToPaste);
