/// <reference types='cypress' />

describe('Validar link de nossos destinos', () => {
 beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('https://www.viacaocometa.com.br');});
it('Deve redirecionar para a página de nossos destinos', () => {
  cy.get('.header-nav-container > :nth-child(1) > :nth-child(4)').click();
  cy.url().should('include', '/nossos-destinos');
  })
});