/// <reference types='cypress' />

describe('Validar Links Footer - Whatsapp', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit('/');
  });
  it('Deve validar Links Footer - Atendimento virtual whatsapp', () => {
    // cy.get('[href="https://api.whatsapp.com/send?phone=5511972645808"] > b').click()
    // cy.url().should('include', '/send?phone=5511972645808')
  })
});