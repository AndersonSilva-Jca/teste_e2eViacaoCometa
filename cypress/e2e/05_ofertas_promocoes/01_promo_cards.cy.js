/// <reference types='cypress' />

describe('', () => {
 beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('https://www.viacaocometa.com.br');});
it('', () => {

  })
});