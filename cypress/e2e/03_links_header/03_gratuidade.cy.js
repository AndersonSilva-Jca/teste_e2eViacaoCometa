/// <reference types='cypress' />

describe('Validar link de gratuidade', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
  });
  it('Deve redirecionar para a página de gratuidade', () => {
    cy.get('.header-nav-container > :nth-child(1) > :nth-child(3) > .focusable').invoke('removeAttr', 'target').click();
    cy.url().should('include', 'https://vendas.jcaholding.com.br/');
  })
});