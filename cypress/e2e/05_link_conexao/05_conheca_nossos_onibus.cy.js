// /// <reference types='cypress' />


<<<<<<< HEAD:cypress/e2e/05_link_conexao/05_conheca_nossos_onibus.cy.js
describe('Validar link de conexão com os ônibus', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
=======
// describe('Validar link de conexão com os ônibus', () => {
//   beforeEach(() => {
//     cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
//     cy.visit('https://www.viacaocometa.com.br');
>>>>>>> 70fd6df7f39c41be84bba7e891644eee59545e4c:cypress/e2e/06_link_conexao/05_conheca_nossos_onibus.cy.js

//   });
//   it('Deve validar o link do card de conexão com os ônibus e redirecionar para a página de contato', () => {
//     cy.get('#headingitem0').click()
//     cy.get('#headingitem1').click()
//     cy.get('#headingitem2').click()
//     cy.get('#headingitem3').click()
//     cy.get('[style="color: rgb(255,0,150);"] > .focusable > span').click({ force: true });
//     cy.url().should('include', 'fale-conosco')
//   })
// });
