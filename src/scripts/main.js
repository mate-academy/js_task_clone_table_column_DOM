document.addEventListener('DOMContentLoaded', function () {
  const getth = document.getElementsByTagName('th');
  const gettr = document.querySelectorAll('tbody tr');
  const tfootTr = document.querySelectorAll('tfoot tr');

  const secondColumnHeader = getth[1];
  let lastElement = null;

  const newTh = document.createElement('th');

  newTh.textContent = secondColumnHeader.textContent;

  for (let i = 0; i < getth.length; i++) {
    if (getth[i].textContent === 'Salary') {
      lastElement = getth[i];
      break;
    }
  }
  lastElement.parentNode.insertBefore(newTh, lastElement);

  for (let i = 0; i < gettr.length; i++) {
    const cells = gettr[i].getElementsByTagName('td');

    if (cells.length > 1) {
      const newTd = document.createElement('td');

      newTd.textContent = cells[1].textContent;
      gettr[i].insertBefore(newTd, cells[cells.length - 1]);
    }
  }

  const newtFootTh = document.createElement('th');

  newtFootTh.textContent = secondColumnHeader.textContent;

  for (let i = 0; i < tfootTr.length; i++) {
    const footerCells = tfootTr[i].getElementsByTagName('th');

    if (footerCells.length > 1) {
      tfootTr[i].insertBefore(newtFootTh, footerCells[footerCells.length - 1]);
    }
  }
});
