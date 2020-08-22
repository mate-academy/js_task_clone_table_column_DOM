'use strict';

function addComumnTable(cloneElement, putElement) {
  const rows = [...document.querySelectorAll('tr')];

  for (let i = 0; i < rows.length; i++) {
    rows[i].insertBefore(
      rows[i].children[cloneElement].cloneNode(true),
      rows[i].children[putElement]
    );
  }
}

addComumnTable(1, 4);
