'use strict';

const secondColumnElements = document.querySelectorAll('tr > :nth-child(2)');
const fourthColumnElements = document.querySelectorAll('tr > :nth-child(4)');

fourthColumnElements.forEach((element, i) => (
  fourthColumnElements[i].after(secondColumnElements[i].cloneNode(true))));
