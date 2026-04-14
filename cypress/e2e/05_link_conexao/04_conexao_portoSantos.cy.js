/// <reference types='cypress' />

describe('Validar link de conexão com o Porto de Santos', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
  });
  it('Deve validar o link do card de conexão com o Porto de Santos e redirecionar para a página de conexão com o Porto de Santos', () => {
    cy.get('[data-tab="slick_tabs-content-carousel-2"]').click({ force: true });
    cy.get('#slick-slide90 > .carousel-cards-content-text > .aem-Grid > .button > clientlib > .about-card-button > .focusable').click({ force: true });
    cy.url().should('include', '/destinos/porto-santos')

  })
});