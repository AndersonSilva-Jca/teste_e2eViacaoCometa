/// <reference types='cypress' />

const { faker } = require('@faker-js/faker');
const login = require('../../fixtures/login.json')

describe('Conta GIRO', () => {
 beforeEach(() => {
cy.visit('https://www.viacaocometa.com.br');
});
  it('Fazer compra de passagem com conta GIRO ', () => {
    cy.login(login.email, login.senha, { timeout: 2000 })
    cy.get('#input-departure').click().type('Campinas')
    cy.contains(' Campinas (SP) ').click()
    cy.get('#input-destination').click()
    cy.contains(' Belo Horizonte - Terminal Rodoviário (MG) ').click()
    cy.get('#input-date').click()
    cy.selecionarDataIda(1)
    cy.get('#search-button', { timeout: 1000 }).click()
    cy.contains('IDA').should('be.visible');
    cy.selecionarPassagemAleatoria({ timeout: 2000 })
    // cy.aceitarTermosSeExistirem()
    cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
    cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
    cy.contains('Escolha o seu assento', { timeout: 5000 }).should('be.visible');
    cy.selecionarAssentoAleatorio('IDA', { timeout: 5000 });
    cy.get('#btn-proceed', { timeout: 5000 }).should('be.visible').click()
    cy.wait(10000);
    cy.url().should('include', '/pagamento')
    cy.get('#tab-conta-giro').click()
    cy.get('[data-js="conditions-check"]').click({ force: true })
    cy.get('.btn-register > [type="button"]').should('be.visible').and('not.be.disabled').click()
    cy.url().should('include', '/login-wallet')
    cy.get('.pin-input-container > #input-password').type('613459')
    cy.get(':nth-child(2) > .container > .row > .button-login').should('be.visible').and('not.be.disabled').click()
    cy.get('#tab-conta-giro').click()
    cy.contains('Pagamento Pendente').should('be.visible')
    cy.get('[data-js="conditions-check"]').click({ force: true })
    //  Não finalizar a compra para evitar transações reais
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })
  
});