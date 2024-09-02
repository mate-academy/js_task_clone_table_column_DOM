'use strict';

describe('Clone table app', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('th:nth-child(2)').debug();
  });

  it('should only change number of columns in original table', () => {
    cy.get('table').children().should('have.length', 3);
    cy.get('thead > tr > th').should('have.length', 6);
    cy.get('thead').children().should('have.length', 1);
    cy.get('tbody').children().should('have.length', 12);
    cy.get('tfoot').children().should('have.length', 1);
  });

  it('should copy second column and paste before the fifth one', () => {
    cy.get('thead th').eq(1).should('have.text', 'Position');
    cy.get('thead th').eq(4).should('have.text', 'Position');

    cy.get('tbody > tr').eq(0).find('td').eq(1).should('have.text', 'Accountant');
    cy.get('tbody > tr').eq(0).find('td').eq(4).should('have.text', 'Accountant');
  });
});
