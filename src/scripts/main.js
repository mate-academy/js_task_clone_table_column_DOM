'use strict';

// variables
const header = document.querySelector('thead tr');
const main = document.querySelectorAll('tbody tr');
const salariesList = [];
const positionsList = [];
const footer = document.querySelector('tfoot tr');

// Add new column fields in header
header.children[header.children.length - 1]
  .parentNode.removeChild(header.children[header.children.length - 1]);

const newHeadPositionColumn = document.createElement('th');
const newHeadSalaryColumn = document.createElement('th');

addNewColumn(header, newHeadPositionColumn, 'Position');
addNewColumn(header, newHeadSalaryColumn, 'Salary');

// Add new column lists
for (let i = 0; i < main.length; i++) {
  salariesList.push(main[i].children[main[i].children.length - 1].textContent);
  positionsList.push(main[i].children[1].textContent);

  main[i].children[main[i].children.length - 1]
    .parentNode.removeChild(main[i].children[main[i].children.length - 1]);
}

addNewList(main, positionsList);
addNewList(main, salariesList);

// Add new column fields in footer
footer.children[footer.children.length - 1].parentNode
  .removeChild(footer.children[footer.children.length - 1]);

const newFootPositionColumn = document.createElement('th');
const newFootSalaryColumn = document.createElement('th');

addNewColumn(footer, newFootPositionColumn, 'Position');
addNewColumn(footer, newFootSalaryColumn, 'Salary');

// helper functions
function addNewColumn(elem, newColumn, content) {
  newColumn.textContent = content;
  elem.append(newColumn);
}

function addNewList(List, arr) {
  for (let i = 0; i < List.length; i++) {
    const el = document.createElement('td');

    el.textContent = arr[i];
    List[i].append(el);
  }
}
