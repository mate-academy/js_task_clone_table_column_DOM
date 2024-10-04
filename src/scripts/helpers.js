export function getColumn(dashboard, columnIndex) {
  const columns = [];
  const sections = [...dashboard.children];
  const rowsInSections = sections.map((section) => [...section.children]);

  rowsInSections.forEach((rows) => {
    rows.forEach((row) => {
      const cells = [...row.children];

      columns.push(cells[columnIndex]);
    });
  });

  return columns;
}
