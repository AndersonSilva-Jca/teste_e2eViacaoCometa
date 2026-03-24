/// <reference types='cypress' />

const { faker } = require('@faker-js/faker');
const login = require('../../fixtures/login.json')

describe('Fazer busca de destinos', () => {
  beforeEach(() => {
    cy.intercept('POST', '**/collect?**', { statusCode: 204 });
    cy.visit('https://www.viacaocometa.com.br');
  });

  // it('Fazer busca de destinos IDA com 1 passageiro', () => {
  //   cy.login(login.email, login.senha, { timeout: 2000 })
  //   cy.get('#input-departure').click().type('Campinas')
  //   cy.contains(' Campinas (SP) ').click()
  //   cy.get('#input-destination').click()
  //   cy.contains(' Rio de Janeiro (Novo Rio) (RJ) ').click()
  //   cy.get('#input-date').click()
  //   cy.selecionarDataIda(1)
  //   cy.get('#search-button').should('be.visible').click()
  //   cy.selecionarPassagemAleatoria({ timeout: 10000 })
  //   cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
  //   cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
  //   cy.contains('Escolha o seu assento', { timeout: 20000 }).should('be.visible');
  //   cy.selecionarAssentoAleatorio({ timeout: 5000 });
  //   cy.get('#btn-proceed').should('be.visible').click()
  //   cy.url().should('include', '/pagamento')
  //   cy.get('#tab-pix').click()
  //   cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
  //   // Não finalizar a compra para evitar transações reais
  //   // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();

  // })
  // it('Fazer busca de destinos IDA com 2 passageiro', () => {
  //   cy.login(login.email, login.senha, { timeout: 2000 })
  //   cy.get('#input-departure').click().type('Campinas')
  //   cy.contains(' Campinas (SP) ').click()
  //   cy.get('#input-destination').click()
  //   cy.contains(' Belo Horizonte - Terminal Rodoviário (MG) ').click()
  //   cy.get('#input-date').click()
  //   cy.selecionarDataIda(1)
  //   cy.get('#input-date-return', { timeout: 2000 }).click()
  //   cy.get('#input-passengers').click()
  //   cy.get('#passenger-quantity-plus-one > .plusone').click()
  //   cy.get('#close-person-quantity').click()
  //   cy.get('#search-button', { timeout: 1000 }).click()
  //   cy.contains('IDA').should('be.visible');
  //   cy.selecionarPassagemAleatoria({ timeout: 2000 })
  //   // cy.aceitarTermosSeExistirem()
  //   cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
  //   cy.get('#input-name-2').click()
  //   cy.contains('Teste Robo ODP').should('be.visible').click()
  //   cy.get('#input-birth-2').type('01011990')
  //   cy.get('.passenger-footer').click()
  //   cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
  //   cy.contains('Escolha o seu assento', { timeout: 5000 }).should('be.visible');
  //   cy.selecionarDoisAssentosAleatorios('IDA', { timeout: 5000 });
  //   cy.get('#btn-proceed', { timeout: 5000 }).should('be.visible').click()
  //   cy.url().should('include', '/pagamento')
  //   cy.get('#tab-pix').click()
  //   cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
  //   //  Não finalizar a compra para evitar transações reais
  //   // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  // })
  // it.only('Fazer busca de destinos IDA e Volta com 1 passageiro', () => {
  //   cy.login(login.email, login.senha, { timeout: 3000 })
  //   cy.get('#input-departure').click().type(' São Paulo (Rod. Tietê) (SP) ')
  //   cy.contains(' Campinas (SP) ').click()
  //   cy.get('#input-destination').click()
  //   cy.contains(' Belo Horizonte - Terminal Rodoviário (MG) ').click()
  //   cy.get('#input-date').click()
  //   cy.selecionarDataIda(1)
  //   cy.get('#input-date-return').click()
  //   cy.selecionarDataVolta(5)
  //   cy.get('#search-button').should('be.visible').click()
  //   cy.selecionarPassagemAleatoria({ timeout: 5000 })
  //   cy.contains('VOLTA').should('be.visible');
  //   cy.selecionarPassagemAleatoria({ timeout: 5000 })
  //   cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
  //   cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
  //   cy.contains('Escolha o seu assento', { timeout: 10000 }).should('be.visible');
  //   cy.selecionarAssentoAleatorio('IDA', { timeout: 5000 });
  //   cy.get('#btn-proceed').should('be.visible').click()
  //   cy.contains('Escolha o seu assento', { timeout: 10000 }).should('be.visible');
  //   cy.selecionarAssentoAleatorio('VOLTA', { timeout: 5000 });
  //   cy.get('#btn-proceed').should('be.visible').click();
  //   cy.url().should('include', '/pagamento')
  //   cy.get('#tab-pix').click()
  //   cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
  //   // Não finalizar a compra para evitar transações reais
  //   // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  // })
  it('Fazer busca de destinos IDA e Volta com 2 passageiro', () => {
    cy.login(login.email, login.senha, { timeout: 2000 })
    cy.get('#input-departure').click().type('Campinas')
    cy.contains(' Campinas (SP) ').click()
    cy.get('#input-destination').click()
    cy.contains(' Belo Horizonte - Terminal Rodoviário (MG) ').click()
    cy.get('#input-date').click()
    cy.selecionarDataIda(1)
    cy.get('#input-date-return').click()
    cy.selecionarDataVolta(2)
    cy.get('#input-passengers').click()
    cy.get('#passenger-quantity-plus-one > .plusone').click()
    cy.get('#close-person-quantity').click()
    cy.get('#search-button', { timeout: 2000 }).click()
    cy.contains('IDA').should('be.visible');
    cy.selecionarPassagemAleatoria('IDA', { timeout: 5000 })
    cy.contains('VOLTA').should('be.visible');
    cy.selecionarPassagemAleatoria('VOLTA', { timeout: 5000 })
    // cy.aceitarTermosSeExistirem()
    cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
    cy.get('#input-name-2').click()
    cy.contains('Teste Robo ODP').should('be.visible').click()
    cy.get('#input-birth-2').type('01011990')
    cy.get('.passenger-footer').click()
    cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
    cy.contains('Escolha o seu assento', { timeout: 5000 }).should('be.visible');
    cy.selecionarDoisAssentosAleatorios('IDA', { timeout: 5000 });
    cy.get('#btn-proceed', { timeout: 10000 }).should('be.visible').click()
    cy.contains('Escolha o seu assento', { timeout: 5000 }).should('be.visible');
    cy.selecionarDoisAssentosAleatorios('VOLTA',{timeout: 5000});
    cy.get('#btn-proceed',{timeout: 10000}).should('be.visible').click();
    cy.url().should('include', '/pagamento')
    cy.get('#tab-pix').click()
    cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
    //  Não finalizar a compra para evitar transações reais
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })
  // it('Fazer busca de destinos IDA com 1 passageiro e 1 criança sem assento', () => {
  //   cy.login(login.email, login.senha, { timeout: 2000 })
  //   cy.get('#input-departure').click().type('Campinas')
  //   cy.contains(' Campinas (SP) ').click()
  //   cy.get('#input-destination').click()
  //   cy.contains(' Belo Horizonte - Terminal Rodoviário (MG) ').click()
  //   cy.get('#input-date').click()
  //   cy.selecionarDataIda(1)
  //   cy.get('.jca-ico-angle-down').click()
  //   cy.get('[data-js="infant-quantity-plus-one"] > .plusone').click()
  //   cy.get('#close-person-quantity').click()
  //   cy.get('#search-button', { timeout: 1000 }).click()
  //   cy.contains('IDA').should('be.visible');
  //   cy.selecionarPassagemAleatoria({ timeout: 2000 })
  //   // cy.aceitarTermosSeExistirem()
  //   cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
  //   cy.get('#input-name-2').click()
  //   cy.contains('Teste Menor de Idade ODP').should('be.visible').click()
  //   cy.get('#input-birth-child-2').type('23032023')
  //   cy.get('.passenger-footer').click()
  //   cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
  //   cy.contains('Escolha o seu assento', { timeout: 5000 }).should('be.visible');
  //   cy.selecionarAssentoAleatorio('IDA', { timeout: 5000 });
  //   cy.get('#btn-proceed', { timeout: 5000 }).should('be.visible').click()
  //   cy.wait(10000);
  //   cy.url().should('include', '/pagamento')
  //   cy.get('#tab-pix').click()
  //   cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
  //   //  Não finalizar a compra para evitar transações reais
  //   // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  // })

})

