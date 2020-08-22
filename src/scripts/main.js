'use strict';


function addComumnTable(cloneElement, putElement) {
  const rows = [...document.querySelectorAll('tr')];

  for (const row of rows) {
    row.insertBefore(
      row.children[cloneElement].cloneNode(true),
      row.children[putElement]
    );
  }
}

addComumnTable(1, 4);
