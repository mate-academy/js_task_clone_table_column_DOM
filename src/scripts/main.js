'use strict';

const rows = document.getElementsByTagName('tr');
const arrRows = [...rows];
// деструктиризація для того щоб використати forEach

arrRows.forEach((el, idx) => {
  if (idx === 0 || idx === arrRows.length - 1) {
    // до першого і останнього елементу ми додамо інші елементи
    const th = document.createElement('th');

    th.textContent = el.children[1].textContent;
    // це точна позиція "position" в таблиці
    el.insertBefore(th, el.children[4]);
    // вставляємо перед потрібним елеметом в кожному рядку

    return;
  }

  const td = document.createElement('td');

  td.textContent = el.children[1].textContent;
  el.insertBefore(td, el.children[4]);
});
