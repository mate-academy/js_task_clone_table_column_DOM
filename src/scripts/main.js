'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const rower = document.querySelectorAll('tr');
  const mass = [...rower];

  for (let n = 0; n < mass.length; n++) {
    const column = mass[n].querySelectorAll('td, th');

    if (column.length >= 2 && column[1]) {
      const vst = column[1].cloneNode(true);
      const beforeCell = column[column.length - 1];

      beforeCell.before(vst);
    }
  }
});
