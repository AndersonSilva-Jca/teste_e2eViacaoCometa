// /// <reference types='cypress' />

<<<<<<< HEAD:cypress/e2e/05_link_conexao/02_outlet_de_hoteis.cy.js
describe('', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
  });
  it('Deve validar o link do card de outlet de hotéis e redirecionar para a página do outlet de hotéis', () => {
    cy.get('#slick-slide21 > .carousel-cards-content-text > .aem-Grid > .button > clientlib > .about-card-button > .focusable').invoke('removeAttr', 'target').click();
    cy.url().should('include', 'www.outletdehoteis.com.br');
  })
});
=======
// describe('', () => {
//   beforeEach(() => {
//     cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
//     cy.visit('https://www.viacaocometa.com.br');
//   });
//   it('Deve validar o link do card de outlet de hotéis e redirecionar para a página do outlet de hotéis', () => {
//     cy.get('#slick-slide21 > .carousel-cards-content-text > .aem-Grid > .button > clientlib > .about-card-button > .focusable').invoke('removeAttr', 'target').click();
//     cy.url().should('include', 'www.outletdehoteis.com.br');
//   })
// });
>>>>>>> 70fd6df7f39c41be84bba7e891644eee59545e4c:cypress/e2e/06_link_conexao/02_outlet_de_hoteis.cy.js
