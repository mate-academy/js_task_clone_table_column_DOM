'use strict';

const rows = [...document.querySelectorAll('tr')];

rows.map((row, i) => {
  rows[i].append([...row.querySelectorAll('th, td')][1].cloneNode(true));
  rows[i].append([...row.querySelectorAll('th, td')][4]);
});

/* Это задание у меня заняло 2 часа. Меня терзают сомнения
по поводу моих умственных способностей.((((
*/
