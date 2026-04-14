// /// <reference types='cypress' />

<<<<<<< HEAD:cypress/e2e/05_link_conexao/03_conexao_aeroportos.cy.js
describe('Validar link de conexão com aeroportos', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
  });
  it('Deve validar o link do card de conexão com aeroportos e redirecionar para a página de conexão com aeroportos', () => {
    cy.get('[data-tab="slick_tabs-content-carousel-1"]').click({ force: true });
    cy.get('#slick-slide80 > .carousel-cards-content-text > .aem-Grid > .button > clientlib > .about-card-button > .focusable').click({ force: true });
    cy.url().should('include', '/destinos/aeroporto')
=======
// describe('Validar link de conexão com aeroportos', () => {
//   beforeEach(() => {
//     cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
//     cy.visit('https://www.viacaocometa.com.br');
//   });
//   it('Deve validar o link do card de conexão com aeroportos e redirecionar para a página de conexão com aeroportos', () => {
//     cy.get('[data-tab="slick_tabs-content-carousel-1"]').click({ force: true });
//     cy.get('#slick-slide80 > .carousel-cards-content-text > .aem-Grid > .button > clientlib > .about-card-button > .focusable').click({ force: true });
//     cy.url().should('include', '/destinos/aeroporto')
>>>>>>> 70fd6df7f39c41be84bba7e891644eee59545e4c:cypress/e2e/06_link_conexao/03_conexao_aeroportos.cy.js

//   })
// });
