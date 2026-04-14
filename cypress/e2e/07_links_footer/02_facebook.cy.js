/// <reference types='cypress' />

describe('Validar Links Footer - Facebook', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit('/');
  });
  it('Deve validar Links Footer - Facebook', () => {
    cy.get('a[href="https://www.facebook.com/ViacaoCometaOficial"]').click()
  })
});