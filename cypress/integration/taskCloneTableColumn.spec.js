'use strict';

describe('Clone table app', () => {
  before(() => {
    cy.visit('/');
  });

  it('should only change number of columns in original table', () => {
    cy.get('table').children().should('have.length', 3);
    cy.get('thead > tr').children().should('have.length', 6);
    cy.get('thead').children().should('have.length', 1);
    cy.get('tbody').children().should('have.length', 12);
    cy.get('tfoot').children().should('have.length', 1);
  });

  it('should copy second column and paste between fourth and sixth', () => {
    cy.get('th:nth-child(2)').then(($th2) => {
      const txt = $th2.text();

      cy.get('th:nth-child(5)').should(($th5) => {
        expect($th5.text()).to.eq(txt);
      });
    });

    cy.get('td:nth-child(2)').then(($td2) => {
      const txt = $td2.text();

      cy.get('td:nth-child(5)').should(($td5) => {
        expect($td5.text()).to.eq(txt);
      });
    });
  });
});
