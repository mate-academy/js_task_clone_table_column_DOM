'use strict';

const table = document.querySelector('table');
const secondTr = table.querySelector('tbody tr:nth-child(2)');
const clonedTr = secondTr.cloneNode(true);
const lastTr = document.querySelector('tbody tr:last-child');

lastTr.before(clonedTr);
