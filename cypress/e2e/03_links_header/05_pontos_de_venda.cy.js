/// <reference types='cypress' />

describe('Validar link de pontos de venda', () => {
 beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('https://www.viacaocometa.com.br');});
it('Deve redirecionar para a página de pontos de venda', () => {
  cy.get('.header-nav-container > :nth-child(1) > :nth-child(5)').click();
  cy.url().should('include', '/pontos-de-venda');
  })
});