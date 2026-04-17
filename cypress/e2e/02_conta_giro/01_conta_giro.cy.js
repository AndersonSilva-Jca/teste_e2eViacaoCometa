/// <reference types='cypress' />

const { faker } = require('@faker-js/faker');


describe('Conta GIRO', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
    cy.env(['login', 'senha']).then((env) => {
      cy.visit('/');
      cy.get('#header-login-button').click()
      cy.get('#input-login').type(env.login)
      cy.get('#input-password').type(env.senha, { log: false })
      cy.get('#button-login').click()
      cy.get('.logged-message').should('contain', 'Olá')
    })
  });
  it('Fazer compra de passagem com conta GIRO ', () => {
    cy.get('#input-departure').click().type('São Paulo')
    cy.contains(' São Paulo (Todos) (SP) ').click({ force: true })
    cy.get('#input-destination').click().type('Rio de Janeiro')
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').click({ force: true })
    cy.get('#input-date').click()
    cy.selecionarDataIda(1)
    cy.get('#search-button', { timeout: 20000 }).click()
    cy.selecionarPassagemAleatoria1({ timeout: 20000 })
    cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
    cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
    cy.contains('Escolha o seu assento', { timeout: 20000 }).should('be.visible');
    cy.selecionarAssentoAleatorio({ timeout: 5000 });
    cy.get('#btn-proceed', { timeout: 5000 }).should('be.visible').click()
    cy.url().should('include', '/pagamento')
    cy.wait(10000);
    cy.url().should('include', '/pagamento')
    cy.get('#tab-conta-giro').click()
    cy.get('[data-js="conditions-check"]').click({ force: true })
    cy.get('.btn-register > [type="button"]').should('be.visible').and('not.be.disabled').click()
    // cy.url().should('include', '/login-wallet')
    // cy.get('.pin-input-container > #input-password').type('613459')
    // cy.get(':nth-child(2) > .container > .row > .button-login').should('be.visible').and('not.be.disabled').click()
    // cy.get('#tab-conta-giro').click()
    // cy.contains('Pagamento Pendente').should('be.visible')
    // cy.get('[data-js="conditions-check"]').click({ force: true })
    //  Não finalizar a compra para evitar transações reais
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })

});