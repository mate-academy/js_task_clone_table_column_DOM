'use strict';

const tableEl = document.querySelector('table');
const trElList = Array.from(document.querySelectorAll('tr'));

trElList.forEach(tr => {
  const thElToDuplicate = tr.children[1]; 
  const clonedTh = thElToDuplicate.cloneNode(true); 
  
  const ageBeforeClonedEl = tr.children[3];
  ageBeforeClonedEl.after(clonedTh);
});