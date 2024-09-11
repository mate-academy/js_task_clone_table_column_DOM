'use strict';

'use strict';

const table = document.querySelector('table');
const rows = [...table.querySelectorAll('tr')];

rows.forEach((row) => {
  const columns = [...row.children];
  const secondColumnCopy = columns[1].cloneNode(true);

  const updatedColumns = [...columns];

  updatedColumns.splice(columns.length - 2, 0, secondColumnCopy);

  row.innerHTML = '';

  updatedColumns.forEach((column) => row.append(column));
});
