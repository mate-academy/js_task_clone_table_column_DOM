'use strict';

// write your code here
const tableHead = document.querySelector('thead');
const headElement = tableHead.querySelectorAll('th');
const tableBody = document.querySelector('tbody');
const tableFooter = document.querySelector('tfoot');
const footerElement = tableFooter.querySelectorAll('th');
const peoplesData = document.querySelectorAll('tr');

let template = '';
let templateHead = '';
let templatefooter = '';

templateHead = `<tr>
    <th>${headElement[0].textContent}</th>
    <th>${headElement[1].textContent}</th>
    <th>${headElement[2].textContent}</th>
    <th>${headElement[3].textContent}</th>
    <th>${headElement[1].textContent}</th>
    <th>${headElement[4].textContent}</th>
  </tr>`;

for (let i = 1; i < peoplesData.length - 1; i += 1) {
  template += `<tr>
    <td>${peoplesData[i].children[0].textContent}</td>
    <td>${peoplesData[i].children[1].textContent}</td>
    <td>${peoplesData[i].children[2].textContent}</td>
    <td>${peoplesData[i].children[3].textContent}</td>
    <td>${peoplesData[i].children[1].textContent}</td>
    <td>${peoplesData[i].children[4].textContent}</td>
  </tr>`;
}

templatefooter = `<tr>
<th>${footerElement[0].textContent}</th>
<th>${footerElement[1].textContent}</th>
<th>${footerElement[2].textContent}</th>
<th>${footerElement[3].textContent}</th>
<th>${footerElement[1].textContent}</th>
<th>${footerElement[4].textContent}</th>
</tr>`;

tableHead.innerHTML = templateHead;
tableBody.innerHTML = template;
tableFooter.innerHTML = templatefooter;
