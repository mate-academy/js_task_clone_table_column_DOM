'use strict';

// write your code here
// Знаходимо таблицю
const tbl = document.querySelector('table');

// Якщо таблиця знайдена — виконуємо клонування
if (tbl) {
  const secondLogicalIndex = computeSecondColumnLogicalIndex(tbl);

  if (typeof secondLogicalIndex === 'number') {
    cloneColumnByLogicalIndex(tbl, secondLogicalIndex);
  }
}

/**
 * Обчислює логічний індекс другої колонки (0-based)
 * Використовує перший рядок thead, або перший рядок tbody, якщо thead відсутній
 */
function computeSecondColumnLogicalIndex(tableElement) {
  if (!tableElement) {
    return null;
  }

  // Беремо перший рядок із thead або tbody
  const refRow =
    (tableElement.tHead &&
      tableElement.tHead.rows &&
      tableElement.tHead.rows[0]) ||
    (tableElement.tBodies &&
      tableElement.tBodies[0] &&
      tableElement.tBodies[0].rows &&
      tableElement.tBodies[0].rows[0]) ||
    null;

  if (!refRow) {
    return null;
  }

  const cells = refRow.cells;

  // Якщо у рядку дві і більше клітинки — визначаємо початок другої
  if (cells.length >= 2) {
    let col = 0;

    for (let i = 0; i < cells.length; i++) {
      const span = cells[i].colSpan || 1;

      if (i === 1) {
        return col;
      } // логічний індекс другої колонки
      col += span;
    }
  }

  // Якщо лише одна клітинка, але вона має colspan >= 2
  if (cells.length === 1) {
    const span = cells[0].colSpan || 1;

    if (span >= 2) {
      return 1;
    }

    return null;
  }

  return null;
}

/**
 * Клонує колонку за логічним індексом і вставляє перед останньою колонкою
 */
function cloneColumnByLogicalIndex(tableElement, targetLogicalIndex) {
  if (!tableElement || typeof targetLogicalIndex !== 'number') {
    return;
  }

  ['thead', 'tbody', 'tfoot'].forEach((sectionName) => {
    const section = tableElement.querySelector(sectionName);

    if (!section) {
      return;
    }

    section.querySelectorAll('tr').forEach((row) => {
      const cellsSnapshot = Array.from(row.cells);

      if (cellsSnapshot.length === 0) {
        return;
      }

      // Знаходимо комірку, яка охоплює цю логічну колонку
      let col = 0;
      let sourceCell = null;

      for (const cell of cellsSnapshot) {
        const span = cell.colSpan || 1;

        if (targetLogicalIndex >= col && targetLogicalIndex < col + span) {
          sourceCell = cell;
          break;
        }
        col += span;
      }

      if (!sourceCell) {
        return;
      }

      const clonedCell = sourceCell.cloneNode(true);
      const refNode = cellsSnapshot[cellsSnapshot.length - 1] || null;

      row.insertBefore(clonedCell, refNode);
    });
  });
}
