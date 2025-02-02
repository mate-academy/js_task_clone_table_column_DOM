'use strict';

const people = document.querySelector('table');
const peopleInfoTab = [...people.rows];

const position = peopleInfoTab.map((row) => row.cells[1].cloneNode(true));
const lastCell = peopleInfoTab.map((row) => row.cells[row.cells.length - 1]);

const appendNewPosition = () => {
  let index = 0;

  lastCell.forEach((el) => {
    el.insertAdjacentElement('beforebegin', position[index]);
    index++;
  });
};

appendNewPosition();
