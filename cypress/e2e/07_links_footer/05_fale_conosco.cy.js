/// <reference types='cypress' />

describe('Validar Links Footer - Fale Conosco', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit('/');
  });
  it('Deve validar Links Footer - Fale Conosco', () => {
    cy.get(':nth-child(4) > :nth-child(1) > [href="/fale-conosco"]').click()
    cy.url().should('include', '/fale-conosco')
  })
});