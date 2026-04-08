/// <reference types='cypress' />

describe('Validar Cards - dúvidas frequentes', () => {
  beforeEach(() => {
    cy.visit('https://www.viacaocometa.com.br');
  });
  it('Deve validar Cards - informação para sua viagem', () => {
    cy.get(':nth-child(3) > .custom-padding > .container > :nth-child(1) > .aem-Grid > .image > .cmp-image > #cmp-image-link > .cmp-image__image').click()
    cy.url().should('include', 'https://www.viacaocometa.com.br/informacao-para-sua-viagem')
  })
});