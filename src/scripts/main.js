'use strict';

// write your code here
// Get all the rows in the table
const tableElem = document.getElementsByTagName('tr');

// Function to clone and insert a cell
function personalizeTable(cellIndex, insertAfterIndex) {
  [...tableElem].forEach(element => {
    // Copy the specified cell
    const copy = element.cells[cellIndex];

    // Insert the copied cell after the specified cell
    element.children[insertAfterIndex].after(copy.cloneNode(true));
  });
}

// Call the function with the desired cell indices
personalizeTable(1, 3);
