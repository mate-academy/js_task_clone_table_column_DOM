'use strict';

/* Чи можна якось об'єднати створення копії і
 встановлення другої колонки thead і tfoot?
 Якщо так, то як це можна зробити?
*/

// copy and past thead
// const thead = document.querySelector('thead');
// const trHead = thead.querySelector('tr');
// const allThOfHead = [...trHead.cells];
// const ThContentOfHead = allThOfHead.map(elem => elem.textContent);
// const trOfHead = thead.querySelector('tr');
// const thForHeat = document.createElement('th');

// thForHeat.textContent = ThContentOfHead[1];
// trOfHead.insertBefore(thForHeat, trHead.cells[trHead.cells.length - 1]);

// // copy and past tbody
// const tbody = document.querySelector('tbody');
// const trOfBody = [...tbody.rows];
// const arrWithTh = trOfBody.map(allTr =>
//   [...allTr.cells].map(el => el.textContent));

// for (let i = 0; i < arrWithTh.length; i++) {
//   const td = document.createElement('td');
//   const elem = trOfBody[i].cells[trOfBody[i].cells.length - 1];

//   td.textContent = arrWithTh[i][1];
//   trOfBody[i].insertBefore(td, elem);
// }

// // copy and past tfoot
// const tfoot = document.querySelector('tfoot');
// const trFoot = tfoot.querySelector('tr');
// const allThOfFoot = [...trFoot.cells];
// const ThContentOfFoot = allThOfFoot.map(elem => elem.textContent);
// const trOfFoot = tfoot.querySelector('tr');
// const thForFoot = document.createElement('th');

// thForFoot.textContent = ThContentOfFoot[1];
// trOfFoot.insertBefore(thForFoot, trFoot.cells[trFoot.cells.length - 1]);

const table = document.querySelector('table');

const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const tfoot = table.querySelector('tfoot');

const trBody = tbody.querySelectorAll('tr');
const trHead = thead.querySelector('tr');
const trFoot = tfoot.querySelector('tr');

const body = [...tbody.rows].map(tr =>
  [...tr.cells].map(td => td.textContent));

const head = [...trHead.cells].map(thElem =>
  thElem.textContent);

const foot = [...trFoot.cells].map(thElem =>
  thElem.textContent);

for (let i = 0; i < body.length; i++) {
  const td = document.createElement('td');
  const elem = tbody.rows[i].cells[tbody.rows[i].cells.length - 1];

  td.textContent = body[i][1];
  trBody[i].insertBefore(td, elem);
}

const thForHead = document.createElement('th');
const thForFoot = document.createElement('th');

thForHead.textContent = head[1];
thForFoot.textContent = foot[1];
trHead.insertBefore(thForHead, trHead.cells[trHead.cells.length - 1]);
trFoot.insertBefore(thForFoot, trFoot.cells[trFoot.cells.length - 1]);
