/// <reference types='cypress' />

//TESTES OK

// const { faker } = require('@faker-js/faker');
const login = require('../../fixtures/login.json')

describe('Fazer busca de destinos', () => {
  before(() => {
    // cy.clearCookies();
    // cy.clearLocalStorage();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
  });
  
  it('Fazer busca de destinos IDA com 1 passageiro', () => {
    // const login = Cypress.env('LOGIN'); 
    // const senha = Cypress.env('SENHA');
    cy.login(login.email, login.senha, { timeout: 10000 })
    cy.get('#input-departure').click().type('São Paulo')
    cy.contains(' São Paulo (Todos) (SP) ').click()
    cy.get('#input-destination').click().type('Rio de Janeiro')
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').click()
    cy.get('#input-date').click()
    cy.selecionarDataIda(2)
    cy.get('#search-button', { timeout: 30000 }).should('be.visible').click()
    cy.selecionarPassagemAleatoria1({ timeout: 30000 })
    cy.get('#buyer-check-1', { timeout: 30000 }).click({ force: true })
    cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
    cy.contains('Escolha o seu assento', { timeout: 30000 }).should('be.visible');
    cy.selecionarAssentoAleatorio({ timeout: 30000 });
    cy.get('#btn-proceed').should('be.visible').click()
    cy.url({ timeout: 30000 }).should('include', '/pagamento')
    // cy.get('#tab-pix').click()
    // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
    // Não finalizar a compra para evitar transações reais
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })
})