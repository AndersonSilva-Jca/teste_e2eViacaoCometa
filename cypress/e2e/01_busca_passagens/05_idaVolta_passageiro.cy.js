/// <reference types='cypress' />

const login = require('../../fixtures/login.json')

describe('Fazer busca de destinos', () => {
  before(() => {
    // cy.clearCookies();
    // cy.clearLocalStorage();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
  });

  it('Fazer busca de destinos IDA e Volta com 1 passageiro', () => {
    //   const login = Cypress.env('LOGIN'); 
    // const senha = Cypress.env('SENHA');
    cy.login(login.email, login.senha, { timeout: 2000 })
    cy.get('#input-departure').click().type('São Paulo')
    cy.contains(' São Paulo (Todos) (SP) ').click()
    cy.get('#input-destination').click().type('Rio de Janeiro')
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').click()
    cy.get('#input-date').click()
    cy.selecionarDataIda(1)
    cy.get('#input-date-return').click()
    cy.selecionarDataVolta(6)
    cy.get('#search-button', {timeout: 20000}).should('be.visible').click()
    cy.wait(1500)
    cy.selecionarPassagemIda({ timeout: 60000 })
    cy.contains('ESCOLHER PASSAGENS', { timeout: 60000 }).should('be.visible');
    cy.wait(15000)
    cy.contains('ESCOLHER PASSAGENS', { timeout: 60000 }).should('be.visible');
    cy.selecionarPassagemVolta({ timeout: 60000 })
    cy.wait(15000)
    cy.get('#buyer-check-1', { timeout: 60000 }).click({ force: true })
    cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click({ force: true });
    cy.url({timeout: 60000}).should('include', '/poltrona')
    cy.wait(10000)
    cy.contains('Escolha o seu assento', { timeout: 20000 }).should('be.visible')
    cy.selecionarAssentoAleatorio1({ timeout: 5000 });
    cy.wait(10000)
    cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click({ force: true });
    cy.url({timeout: 60000}).should('include', '/poltrona')
    cy.wait(10000)
    cy.selecionarAssentoAleatorio1({ timeout: 5000 });
    cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click({ force: true });
    cy.url({timeout: 60000}).should('include', '/pagamento')
  //   cy.get('#tab-pix').click() 
  //   cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
  //   // Não finalizar a compra para evitar transações reais
  //   // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })
})