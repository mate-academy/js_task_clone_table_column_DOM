'use strict';

const table = document.querySelector('table');

const ths = table.children;

const makeCopy = (element) => {
  const rows = element.children;

  for (const row of rows) {
    const copyRows = row.children;

    copyRows[3].after(copyRows[1].cloneNode(true));
  }
}

[...ths].forEach(th => makeCopy(th));