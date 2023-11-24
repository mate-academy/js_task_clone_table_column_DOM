'use strict';

const rows = document.querySelectorAll('tr');

for (const [index, el] of rows.entries()) {
  if (index === 0 || index === rows.length - 1) {
    const tmp = el.cells[4];

    el.innerHTML += '<th>' + tmp.textContent + '</th>';
    el.cells[4].innerHTML = '<th>' + el.cells[1].textContent + '</th>';
  } else {
    const tmp = el.cells[4];

    el.innerHTML += '<td>' + tmp.textContent + '</td>';
    el.cells[4].innerHTML = '<td>' + el.cells[1].textContent + '</td>';
  }
}
