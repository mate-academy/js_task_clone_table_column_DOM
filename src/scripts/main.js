'use strict';
// прив'язка до вузлів

const tableBody = document.querySelector('tbody');
const tableHead = document.querySelector('thead');
const tableFoot = document.querySelector('tfoot');

// Текст для підпису колонки верх і низ
const headName = tableHead.rows[0].cells[1].innerHTML;
const footName = tableFoot.rows[0].cells[1].innerHTML;

// теги для вставки верх і низ
const lasthead = document.createElement('tr');
const lastfoot = document.createElement('tr');

lasthead.innerHTML = headName;
lastfoot.innerHTML = footName;

// Добаляєм новий верх і низ
const elementHeadTooAdd = tableHead.children[0].children[4];

elementHeadTooAdd.before(lasthead);

const elementFootTooAdd = tableFoot.children[0].children[4];

elementFootTooAdd.before(lastfoot);

//

for (const row of tableBody.children) {
  const salaryCell = row.children[4]; // получаєм 4 елемент із основної таблиці
  const newCell = document.createElement('td');

  newCell.textContent = row.children[1].textContent;
  salaryCell.before(newCell);
}
