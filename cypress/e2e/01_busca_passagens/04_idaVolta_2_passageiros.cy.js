/// <reference types='cypress' />

//TESTES OK

// const login = require('../../fixtures/login.json')

describe('Fazer busca de destinos', () => {
  before(() => {
    // cy.clearCookies();
    // cy.clearLocalStorage();
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  cy.visit('/');
});

it('Fazer busca de destinos IDA e Volta com 2 passageiros', () => {
    const login = Cypress.env('LOGIN'); 
    const senha = Cypress.env('SENHA');
    cy.login(login, senha, { timeout: 2000 })
    cy.get('#input-departure').click().type('São Paulo')
    cy.contains(' São Paulo (Todos) (SP) ').click()
    cy.get('#input-destination').click().type('Rio de Janeiro')
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').click()
    cy.get('#input-date').click()
    cy.selecionarDataIda(1)
    cy.get('#input-date-return').click()
    cy.selecionarDataVolta(6)
    cy.get('#input-passengers').click()
    cy.get('#passenger-quantity-plus-one > .plusone').click()
    cy.get('#close-person-quantity').click()
    cy.get('#search-button', { timeout: 2000 }).click()
    cy.wait(5000)
    cy.selecionarPassagemIda({ timeout: 20000 })
    cy.wait(15000)
    cy.selecionarPassagemVolta({ timeout: 20000 })
    cy.wait(20000)
    cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
    cy.get('#input-name-2').click()
    cy.contains('Teste Robo ODP').should('be.visible').click()
    cy.get('#input-birth-2').type('01011990')
    cy.get('.passenger-footer').click()
    cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
    cy.contains('Escolha o seu assento', { timeout: 20000 }).should('be.visible')
    cy.wait(8000)
    cy.selecionarDoisAssentosAleatorios({ timeout: 5000 });
    cy.get('#btn-proceed', { timeout: 10000 }).should('be.visible').click()
    cy.contains('Escolha o seu assento', { timeout: 20000 }).should('be.visible')
    cy.wait(8000)
    cy.selecionarDoisAssentosAleatorios({ timeout: 5000 });
    cy.get('#btn-proceed', { timeout: 10000 }).should('be.visible').click();
    cy.wait(8000)
    // cy.get('#tab-pix').click()
    // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
    //  Não finalizar a compra para evitar transações reais
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })
})  