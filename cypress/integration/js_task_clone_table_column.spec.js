///<reference types=‘cypress’/>

describe('Tests for your table.', () => {
  before(() => {
    cy.visit('/');
  });

  it('Table exists and have proper parameters.', ()=>{
    cy.get('table').children().should('have.length', 3)
    cy.get('thead > tr').children().should('have.length', 6)
    cy.get('thead').children().should('have.length', 1)
    cy.get('tbody').children().should('have.length', 12)
    cy.get('tfoot').children().should('have.length', 1)
  });

  it('Table header is copied.', ()=>{
    cy.get('th:nth-child(2)').then(($th2) => {
        const txt = $th2.text()

        cy.get('th:nth-child(5)').should(($th5) => {
            expect($th5.text()).to.eq(txt)
        })
    })
  });

  it('Table column is copied.', ()=>{
    cy.get('td:nth-child(2)').then(($td2) => {
        const txt = $td2.text()

        cy.get('td:nth-child(5)').should(($td5) => {
            expect($td5.text()).to.eq(txt)
        })
    })
  });
});