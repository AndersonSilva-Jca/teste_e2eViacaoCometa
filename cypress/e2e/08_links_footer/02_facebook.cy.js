/// <reference types='cypress' />

describe('Validar Links Footer - Facebook', () => {
  beforeEach(() => {
    cy.visit('https://www.viacaocometa.com.br');
  });
  it('Deve validar Links Footer - Facebook', () => {
    cy.get('a[href="https://www.facebook.com/ViacaoCometaOficial"]').click()
    cy.url().should('include', '/ViacaoCometaOficial')
  })
});