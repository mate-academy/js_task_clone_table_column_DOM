'use strict'

// write your code here
const tableRows = document.querySelectorAll('table tr')
const tableHead = document.querySelector('thead tr')
const tableFoot = document.querySelector('tfoot tr')

const SECOND_COLUMN = 1

const TableHeaderCell = (text) => {
  const tableHeaderCell = document.createElement('th')
  tableHeaderCell.textContent = text

  return tableHeaderCell
}

const TableDataCell = (text) => {
  const tableDataCell = document.createElement('td')
  tableDataCell.textContent = text

  return tableDataCell;
}

const pasteColumn = (cloneColumn, indexColumn, row) => {
  if (indexColumn === SECOND_COLUMN) {
    const tableColumn = TableDataCell(cloneColumn.textContent);

    row.lastElementChild.before(tableColumn)
  }
}

const copyColumn = () => {
  const tableHeadText = tableHead.children[SECOND_COLUMN].textContent
  const tableFootText = tableFoot.children[SECOND_COLUMN].textContent


  tableHead.lastElementChild.before(TableHeaderCell(tableHeadText))
  tableFoot.lastElementChild.before(TableHeaderCell(tableFootText))

  for (const row of tableRows) {
    const columns = [...row.querySelectorAll('td')]

    columns.forEach((column, index) => {
      pasteColumn(column, index, row)
    })
  }
}

const App = () => {
  copyColumn();
}

App();
