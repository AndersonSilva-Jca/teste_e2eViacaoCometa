/// <reference types='cypress' />


const login = require ('../../fixtures/login.json')

describe('Validar link do clube giro', () => {
 beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('https://www.viacaocometa.com.br');});
it('Deve validar o link do card de clube giro e redirecionar para a página do clube giro', () => {
  cy.get('#slick-slide20 > .carousel-cards-content-text > .aem-Grid > .button > clientlib > .about-card-button > .focusable').invoke('removeAttr', 'target').click({ force: true })
  cy.url().should('include' , 'https://www.viacaocometa.com.br/clubegiro')
  cy.get('#header-login-button').click()
  cy.login(login.email, login.senha, { timeout: 2000 })
  cy.get('.logged-message').should('contain', 'Olá')
  cy.get(':nth-child(6) > .custom-padding > .container > :nth-child(1) > .aem-Grid > .button > clientlib > .about-card-button > .focusable').click({ force: true })
  cy.url().should('include' , 'https://www.clubegiro.com.br/')
  })
});