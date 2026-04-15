/// <reference types='cypress' />

describe('Validar link do programa de fidelidade', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
  });
  it('Deve redirecionar para o site Clube Giro com sucesso', () => {
    cy.get(':nth-child(1) > :nth-child(6) > .focusable').click()
    cy.url().should('include', '/clubegiro')
  //   cy.get('a[href="https://www.clubegiro.com.br"]').click()
  //   cy.url().should('include', 'clubegiro.com.br')
  })
});