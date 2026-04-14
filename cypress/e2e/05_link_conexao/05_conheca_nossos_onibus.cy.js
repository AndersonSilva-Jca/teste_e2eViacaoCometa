/// <reference types='cypress' />


describe('Validar link de conexão com os ônibus', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');

  });
  it('Deve validar o link do card de conexão com os ônibus e redirecionar para a página de contato', () => {
    cy.get('#headingitem0').click()
    cy.get('#headingitem1').click()
    cy.get('#headingitem2').click()
    cy.get('#headingitem3').click()
    cy.get('[style="color: rgb(255,0,150);"] > .focusable > span').click({ force: true });
    cy.url().should('include', 'fale-conosco')
  })
});