/// <reference types='cypress' />

describe('Validar link de nossos destinos', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
  });
  it('Deve redirecionar para a página de nossos destinos', () => {
    cy.get('.header-nav-container > :nth-child(1) > :nth-child(4) > .focusable').click();
    cy.url().should('include', '/nossos-destinos');
  })
});