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

  it('Fazer busca de destinos IDA com 1 passageiro e 1 criança sem assento', () => {
    const login = cy.env('login');
    const senha = cy.env('senha');
    cy.login(login, senha, { timeout: 2000 })
    cy.get('#input-departure').click().type('São Paulo')
    cy.contains(' São Paulo (Todos) (SP) ').click()
    cy.get('#input-destination').click().type('Rio de Janeiro')
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').click()
    cy.get('#input-date').click()
    cy.selecionarDataIda(1)
    cy.get('.jca-ico-angle-down').click()
    cy.get('[data-js="infant-quantity-plus-one"] > .plusone').click()
    cy.get('#close-person-quantity').click()
    cy.get('#search-button', { timeout: 1000 }).click()
    cy.contains('IDA').should('be.visible');
    cy.selecionarPassagemAleatoria1({ timeout: 2000 })
    cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
    cy.get('#input-name-2').click()
    cy.contains('Teste Menor de Idade ODP').should('be.visible').click()
    cy.get('#input-birth-child-2').type('23032023')
    cy.get('.passenger-footer').click()
    cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
    cy.contains('Escolha o seu assento', { timeout: 5000 }).should('be.visible');
    cy.selecionarAssentoAleatorio('IDA', { timeout: 5000 });
    cy.get('#btn-proceed', { timeout: 5000 }).should('be.visible').click()
    cy.url().should('include', '/pagamento')
    // cy.get('#tab-pix').click()
    // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
    //  Não finalizar a compra para evitar transações reais
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })

})