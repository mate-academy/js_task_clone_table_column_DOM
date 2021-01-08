'use strict';

/* Чи можна якось об'єднати створення копії і
 встановлення другої колонки thead і tfoot?
 Якщо так, то як це можна зробити?
*/

// copy and past thead
const thead = document.querySelector('thead');
const trHead = thead.querySelector('tr');
const allThOfHead = [...trHead.cells];
const ThContentOfHead = allThOfHead.map(elem => elem.textContent);
const trOfHead = thead.querySelector('tr');
const thForHeat = document.createElement('th');
const thForFoot = document.createElement('th');

thForHeat.textContent = ThContentOfHead[1];
trOfHead.insertBefore(thForHeat, trHead.cells[trHead.cells.length - 1]);

// copy and past tbody
const tbody = document.querySelector('tbody');
const trOfBody = [...tbody.rows];
const arrWithTh = trOfBody.map(allTr =>
  [...allTr.cells].map(el => el.textContent));

for (let i = 0; i < arrWithTh.length; i++) {
  const td = document.createElement('td');

  td.textContent = arrWithTh[i][1];
  trOfBody[i].insertBefore(td, trOfBody[i].cells[trOfBody[i].cells.length - 1]);
}

// copy and past tfoot
const tfoot = document.querySelector('tfoot');
const trFoot = tfoot.querySelector('tr');
const allThOfFoot = [...trFoot.cells];
const ThContentOfFoot = allThOfFoot.map(elem => elem.textContent);
const trOfFoot = tfoot.querySelector('tr');

thForFoot.textContent = ThContentOfFoot[1];
trOfFoot.insertBefore(thForFoot, trFoot.cells[trFoot.cells.length - 1]);
