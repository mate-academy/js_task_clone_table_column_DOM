'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const sections = ['thead', 'tbody', 'tfoot'];

  sections.forEach((sectionName) => {
    const section = table.querySelector(sectionName);

    if (!section) {
      return;
    }

    const rows = section.querySelectorAll('tr');

    rows.forEach((row) => {
      const cells = Array.from(row.children);

      if (cells.length < 2) {
        return;
      } // Перевірка на наявність другого стовпця

      const secondCell = cells[1].cloneNode(true); // Клонуємо другий стовпець

      // Вставляємо перед останнім стовпцем
      row.insertBefore(secondCell, cells[cells.length - 1]);
    });
  });
});
