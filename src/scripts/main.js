'use strict';

// get collection of columns

const trCollection = [...document.getElementsByTagName('tr')];

// function that modifies columns

function listModify(list) {
  const positionColumn = list.children[1].cloneNode(true);

  list.insertBefore(positionColumn, list.lastElementChild);
}

// implement function for each column

trCollection.forEach(columnList => listModify(columnList));
