/// <reference types='cypress' />

describe('Validar link de gratuidade', () => {
 beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('https://www.viacaocometa.com.br');});
it('Deve redirecionar para a página de gratuidade', () => {
  cy.get('.header-nav-container > :nth-child(1) > :nth-child(3) > .focusable').invoke('removeAttr', 'target').click();
  cy.url().should('include', 'https://vendas.jcaholding.com.br/');
  })
});