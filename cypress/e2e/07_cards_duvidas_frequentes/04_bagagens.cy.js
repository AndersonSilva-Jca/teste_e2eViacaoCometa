/// <reference types='cypress' />

describe('Validar Cards - dúvidas frequentes', () => {
  beforeEach(() => {
    cy.visit('https://www.viacaocometa.com.br');
  });
  it('Deve validar Cards - bagagem', () => {
    cy.get(':nth-child(6) > .custom-padding > .container > :nth-child(1) > .aem-Grid > .image > .cmp-image > #cmp-image-link > .cmp-image__image').click()
    cy.url().should('include', '/bagagem')
  })
});