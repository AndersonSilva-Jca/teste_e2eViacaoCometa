/// <reference types='cypress' />

describe('Validar link do programa de fidelidade', () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('https://www.viacaocometa.com.br');
  });
  it('Deve redirecionar para o site Clube Giro com sucesso', () => {
    cy.get(':nth-child(1) > :nth-child(6) > .focusable').click()
    cy.url().should('include', '/clubegiro')
    cy.get('a[href="https://www.clubegiro.com.br"]').click()
    cy.url().should('include', 'clubegiro.com.br')
  })
});