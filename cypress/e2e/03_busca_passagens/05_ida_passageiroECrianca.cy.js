/// <reference types='cypress' />

const { faker } = require('@faker-js/faker');
const login = require('../../fixtures/login.json')

describe('Fazer busca de destinos', () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('https://www.viacaocometa.com.br');
  });


  // it('Fazer busca de destinos IDA com 2 passageiro', () => {
  //   cy.login(login.email, login.senha, { timeout: 2000 })
  //   cy.get('#input-departure').click().type('São Paulo')
  //   cy.contains(' São Paulo (Todos) (SP) ').click()
  //   cy.get('#input-destination').click().type('Rio de Janeiro')
  //   cy.contains(' Rio de Janeiro (Todos) (RJ) ').click()
  //   cy.get('#input-date').click()
  //   cy.selecionarDataIda(1)
  //   cy.get('#input-date-return', { timeout: 2000 }).click()
  //   cy.get('#input-passengers').click()
  //   cy.get('#passenger-quantity-plus-one > .plusone').click()
  //   cy.get('#close-person-quantity').click()
  //   cy.get('#search-button', { timeout: 1000 }).click()
  //   cy.url({wait: 5000}).should('include', '/disponibilidade');
  //   cy.selecionarPassagemAleatoria1({ timeout: 2000 })
  //   // cy.aceitarTermosSeExistirem()
  //   cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
  //   cy.get('#input-name-2').click()
  //   cy.contains('Teste Robo ODP').should('be.visible').click()
  //   cy.get('#input-birth-2').scrollIntoView().type('01011990')
  //   cy.get('.passenger-footer').scrollIntoView().click()
  //   cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
  //   cy.contains('Escolha o seu assento', { wait: 5000 }).should('be.visible');
  //   cy.selecionarDoisAssentosAleatorios('IDA', { timeout: 5000 });
  //   cy.get('#btn-proceed', { timeout: 5000 }).should('be.visible').click()
  //   cy.url().should('include', '/pagamento')
  //   // cy.get('#tab-pix').click()
  //   // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
  //   //  Não finalizar a compra para evitar transações reais
  //   // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  // })
  // it('Fazer busca de destinos IDA e Volta com 1 passageiro', () => {
  //   cy.login(login.email, login.senha, { timeout: 2000 })
  //   cy.get('#input-departure').click().type('São Paulo')
  //   cy.contains(' São Paulo (Todos) (SP) ').click()
  //   cy.get('#input-destination').click().type('Rio de Janeiro')
  //   cy.contains(' Rio de Janeiro (Todos) (RJ) ').click()
  //   cy.get('#input-date').click()
  //   cy.selecionarDataIda(1)
  //   cy.get('#input-date-return').click()
  //   cy.selecionarDataVolta(6)
  //   cy.get('#search-button', {timeout: 60000}).should('be.visible').click()
  //   // cy.contains('São Paulo', { timeout: 60000 }).should('be.visible')    
  //   cy.selecionarPassagemAleatoria1({ timeout: 60000 })
  //   // cy.contains('São Paulo', { timeout: 60000 }).should('be.visible')    
  //   // cy.contains('ESCOLHER PASSAGENS', { timeout: 60000 }).should('be.visible');
  //   cy.selecionarPassagemAleatoria1({ timeout: 60000 })
  //   cy.get('#buyer-check-1', { timeout: 60000 }).click({ force: true })
  //   cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click({ force: true });
  //   cy.url({timeout: 60000}).should('include', '/poltrona')
  //   cy.selecionarAssentoAleatorio1({ timeout: 5000 });
  //   cy.get('#btn-proceed').should('be.visible').click({force: true});
  //   cy.url({timeout: 60000}).should('include', '/poltrona')

  //   cy.selecionarAssentoAleatorio1({ timeout: 5000 });
  //   cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click({ force: true });
  //   cy.url({timeout: 60000}).should('include', '/pagamento')
  // //   cy.get('#tab-pix').click() 
  // //   cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
  // //   // Não finalizar a compra para evitar transações reais
  // //   // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  // })
  // it.only('Fazer busca de destinos IDA e Volta com 2 passageiro', () => {
  //   cy.login(login.email, login.senha, { timeout: 2000 })
  //   cy.get('#input-departure').click().type('São Paulo')
  //   cy.contains(' São Paulo (Todos) (SP) ').click()
  //   cy.get('#input-destination').click().type('Rio de Janeiro')
  //   cy.contains(' Rio de Janeiro (Todos) (RJ) ').click()
  //   cy.get('#input-date').click()
  //   cy.selecionarDataIda(1)
  //   cy.get('#input-date-return').click()
  //   cy.selecionarDataVolta(2)
  //   cy.get('#input-passengers').click()
  //   cy.get('#passenger-quantity-plus-one > .plusone').click()
  //   cy.get('#close-person-quantity').click()
  //   cy.get('#search-button', { timeout: 2000 }).click()
  //   cy.selecionarPassagemIda()
  //   cy.selecionarPassagemVolta()
  //   cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
  //   cy.get('#input-name-2').click()
  //   cy.contains('Teste Robo ODP').should('be.visible').click()
  //   cy.get('#input-birth-2').type('01011990')
  //   cy.get('.passenger-footer').click()
  //   cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
  //   cy.contains('Escolha o seu assento', { timeout: 20000 }).should('be.visible')
  //   cy.selecionarDoisAssentosAleatorios('IDA', { timeout: 5000 });
  //   cy.get('#btn-proceed', { timeout: 10000 }).should('be.visible').click()
  //   cy.contains('Escolha o seu assento', { timeout: 20000 }).should('be.visible')
  //   cy.selecionarDoisAssentosAleatorios('VOLTA',{timeout: 5000});
  //   cy.get('#btn-proceed',{timeout: 10000}).should('be.visible').click();
  //   cy.contains('Cartões de crédito').should('be.visible')
  //   // cy.get('#tab-pix').click()
  //   // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
  //   //  Não finalizar a compra para evitar transações reais
  //   // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  // })
  it('Fazer busca de destinos IDA com 1 passageiro e 1 criança sem assento', () => {
    cy.login(login.email, login.senha, { timeout: 2000 })
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