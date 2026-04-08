/// <reference types='cypress' />

describe('Validar Links Footer - Whatsapp', () => {
  beforeEach(() => {
    cy.visit('https://www.viacaocometa.com.br');
  });
  it('Deve validar Links Footer - Vendas whatsapp', () => {
    cy.get(':nth-child(2) > [href="https://wa.me/5511933153607"]').click()
    cy.url().should('include', '/5511933153607')
  })
});