'use strict';
// write your code here

const table = document.querySelector('table');
const tbodyArray = [...document.querySelectorAll(`tbody tr`)];

const data = [];

tbodyArray.forEach(el => {
  const innerText = el.innerText.split('\t');

  data.push(innerText);
});

table.innerHTML = ``;

const headerHandler = () => {
  const thead = document.createElement(`thead`);

  thead.innerHTML
    = `<tr>
      <th>Name</th>
      <th>Position</th>
      <th>Office</th>
      <th>Age</th>
      <th>Position</th>
      <th>Salary</th>
    </tr>`;
  table.appendChild(thead);
};

const bodyHandler = () => {
  const tbody = document.createElement(`tbody`);

  table.appendChild(tbody);

  data.forEach(el => {
    const tr = document.createElement(`tr`);

    tr.innerHTML
      = `
        <td>${el[0]}</td>
        <td>${el[1]}</td>
        <td>${el[2]}</td>
        <td>${el[3]}</td>
        <td>${el[1]}</td>
        <td>${el[4]}</td>
      `;
    tbody.appendChild(tr);
  });
};

const footerHandler = () => {
  const tfoot = document.createElement(`tfoot`);

  tfoot.innerHTML
    = `<tr>
      <th>Name</th>
      <th>Position</th>
      <th>Office</th>
      <th>Age</th>
      <th>Position</th>
      <th>Salary</th>
    </tr>`;
  table.appendChild(tfoot);
};

headerHandler();
bodyHandler();
footerHandler();
