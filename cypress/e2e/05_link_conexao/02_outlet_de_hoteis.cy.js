/// <reference types='cypress' />

describe('', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
  });
  it('Deve validar o link do card de outlet de hotéis e redirecionar para a página do outlet de hotéis', () => {
    cy.get('#slick-slide21 > .carousel-cards-content-text > .aem-Grid > .button > clientlib > .about-card-button > .focusable').invoke('removeAttr', 'target').click();
    cy.url().should('include', 'www.outletdehoteis.com.br');
  })
});