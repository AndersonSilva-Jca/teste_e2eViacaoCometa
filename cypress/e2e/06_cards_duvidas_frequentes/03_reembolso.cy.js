/// <reference types='cypress' />

describe('Validar Cards - dúvidas frequentes', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit('/');
  });
  it('Deve validar Cards - reembolso', () => {
    cy.get(':nth-child(5) > .custom-padding > .container > :nth-child(1) > .aem-Grid > .image > .cmp-image > #cmp-image-link > .cmp-image__image').click()
    cy.url().should('include', '/reembolso')
  })
});