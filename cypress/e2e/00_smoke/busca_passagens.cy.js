/// <reference types='cypress' />


// const { faker } = require('@faker-js/faker');

describe('Fazer busca de destinos, selecionar datas, compra de passagens, selecionar assentos e finalizar compra', () => {

  beforeEach(() => {
    cy.clearCookies();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.env(['login', 'senha']).then((env) => {
      cy.visit('/');
      cy.get('#header-login-button').click()
      cy.get('#input-login').type(env.login)
      cy.get('#input-password').type(env.senha, { log: false })
      cy.get('#button-login').click()
      cy.get('.logged-message').should('contain', 'Olá')
    })
  });
  it('Fazer busca de destinos IDA com 1 passageiro', () => {
    cy.get('#input-departure').click().type('São Paulo')
    cy.contains(' São Paulo (Todos) (SP) ').click({ force: true })
    cy.get('#input-destination').click().type('Rio de Janeiro')
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').click({ force: true })
    cy.get('#input-date').click()
    cy.selecionarDataIda(2)
    cy.get('#search-button', { timeout: 90000 }).should('be.visible').click()
    cy.wait(5000)
    cy.selecionarPassagemAleatoria1({ timeout: 90000 })
    cy.wait(2000)
    cy.get('#buyer-check-1', { timeout: 90000 }).click({ force: true })
    cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
    cy.contains('Escolha o seu assento', { timeout: 90000 }).should('be.visible');
    cy.selecionarAssentoAleatorio({ timeout: 90000 });
    cy.get('#btn-proceed').should('be.visible').click()
    cy.url({ timeout: 90000 }).should('include', '/pagamento')
    // Não finalizar a compra para evitar transações reais
    // cy.get('#tab-pix').click()
    // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })

  // it('Fazer busca de destinos IDA com 2 passageiros', () => {
  //   cy.get('#input-departure').click().type('São Paulo')
  //   cy.contains(' São Paulo (Todos) (SP) ').click()
  //   cy.get('#input-destination').click().type('Rio de Janeiro')
  //   cy.contains(' Rio de Janeiro (Todos) (RJ) ').click()
  //   cy.get('#input-date').click()
  //   cy.selecionarDataIda(1)
  //   cy.get('#input-passengers').click()
  //   cy.get('#passenger-quantity-plus-one > .plusone').click()
  //   cy.get('#close-person-quantity').click()
  //   cy.get('#search-button', { timeout: 90000 }).click()
  //   cy.wait(15000)
  //   cy.selecionarPassagemAleatoria1({ timeout: 90000 })
  //   cy.wait(2000)
  //   cy.get('#buyer-check-1', { timeout: 15000 }).click({ force: true })
  //   cy.get('#input-name-2').click()
  //   cy.contains('Teste Robo ODP').should('be.visible').click()
  //   cy.get('#input-birth-2').type('01011990')
  //   cy.get('.passenger-footer').click()
  //   cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
  //   cy.contains('Escolha o seu assento', { timeout: 90000 }).should('be.visible')
  //   cy.wait(10000)
  //   cy.selecionarDoisAssentosAleatorios('IDA', { timeout: 90000 });
  //   cy.get('#btn-proceed', { timeout: 90000 }).should('be.visible').click()
  //   // cy.contains('Cartões de crédito').should('be.visible')
  //   // cy.get('#tab-pix').click()
  //   // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
  //   //  Não finalizar a compra para evitar transações reais
  //   // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  // })

  // it('Fazer busca de destinos IDA com 1 passageiro e 1 criança sem assento', () => {
  //   cy.get('#input-departure').click().type('São Paulo')
  //   cy.contains(' São Paulo (Todos) (SP) ').click()
  //   cy.get('#input-destination').click().type('Rio de Janeiro')
  //   cy.contains(' Rio de Janeiro (Todos) (RJ) ').click()
  //   cy.get('#input-date').click()
  //   cy.selecionarDataIda(1)
  //   cy.get('.jca-ico-angle-down').click()
  //   cy.get('[data-js="infant-quantity-plus-one"] > .plusone').click()
  //   cy.get('#close-person-quantity').click()
  //   cy.get('#search-button', { timeout: 90000 }).click()
  //   cy.contains('IDA', { timeout: 90000 }).should('be.visible');
  //   cy.wait(5000)
  //   cy.selecionarPassagemAleatoria1({ timeout: 90000 })
  //   cy.wait(10000)
  //   cy.get('#buyer-check-1', { timeout: 90000 }).click({ force: true })
  //   cy.get('#input-name-2').click()
  //   cy.contains('Teste Menor de Idade ODP').should('be.visible').click()
  //   cy.get('#input-birth-child-2').type('23032023')
  //   cy.get('.passenger-footer').click()
  //   cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
  //   cy.contains('Escolha o seu assento', { timeout: 90000 }).should('be.visible');
  //   cy.wait(5000)
  //   cy.selecionarAssentoAleatorio('IDA', { timeout: 90000 });
  //   cy.get('#btn-proceed', { timeout: 90000 }).should('be.visible').click()
  //   cy.url().should('include', '/pagamento')
    // cy.get('#tab-pix').click()
    // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
    //  Não finalizar a compra para evitar transações reais
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  // })

//   it('Fazer busca de destinos IDA e Volta com 1 passageiro', () => {
//     cy.get('#input-departure').click().type('São Paulo')
//     cy.contains(' São Paulo (Todos) (SP) ').click()
//     cy.get('#input-destination').click().type('Rio de Janeiro')
//     cy.contains(' Rio de Janeiro (Todos) (RJ) ').click()
//     cy.get('#input-date').click()
//     cy.selecionarDataIda(1)
//     cy.get('#input-date-return').click()
//     cy.selecionarDataVolta(6)
//     cy.get('#search-button', { timeout: 90000 }).should('be.visible').click()
//     cy.wait(5000)
//     cy.selecionarPassagemAleatoria1({ timeout: 90000 })
//     cy.contains('ESCOLHER PASSAGENS', { timeout: 90000 }).should('be.visible');
//     cy.wait(30000)
//     cy.contains('ESCOLHER PASSAGENS', { timeout: 90000 }).should('be.visible');
//     cy.selecionarPassagemAleatoria1({ timeout: 90000 })
//     cy.wait(15000)
//     cy.get('#buyer-check-1', { timeout: 60000 }).click({ force: true })
//     cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click({ force: true });
//     cy.url({ timeout: 60000 }).should('include', '/poltrona')
//     cy.wait(8000)
//     cy.contains('Escolha o seu assento', { timeout: 20000 }).should('be.visible')
//     cy.selecionarAssentoAleatorio1({ timeout: 15000 });
//     cy.wait(8000)
//     cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click({ force: true });
//     cy.url({ timeout: 60000 }).should('include', '/poltrona')
//     cy.wait(8000)
//     cy.selecionarAssentoAleatorio1({ timeout: 15000 });
//     cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click({ force: true });
//     cy.url({ timeout: 60000 }).should('include', '/pagamento')
//     //   cy.get('#tab-pix').click() 
//     //   cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
//     // Não finalizar a compra para evitar transações reais
//     // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
//   })

//   it('Fazer busca de destinos IDA e Volta com 2 passageiros', () => {
//     cy.clearCookies();
//     cy.get('#input-departure').click().type('São Paulo')
//     cy.contains(' São Paulo (Todos) (SP) ').click()
//     cy.get('#input-destination').click().type('Rio de Janeiro')
//     cy.contains(' Rio de Janeiro (Todos) (RJ) ').click()
//     cy.get('#input-date').click()
//     cy.selecionarDataIda(1)
//     cy.get('#input-date-return').click()
//     cy.selecionarDataVolta(6)
//     cy.get('#input-passengers').click()
//     cy.get('#passenger-quantity-plus-one > .plusone').click()
//     cy.get('#close-person-quantity').click()
//     cy.get('#search-button', { timeout: 90000 }).click()
//     cy.wait(5000)
//     cy.selecionarPassagemAleatoria1({ timeout: 90000 })
//     cy.wait(30000)
//     cy.selecionarPassagemAleatoria1({ timeout: 90000 })
//     cy.wait(5000)
//     cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
//     cy.get('#input-name-2').click()
//     cy.contains('Teste Robo ODP').should('be.visible').click()
//     cy.get('#input-birth-2').type('01011990')
//     cy.get('.passenger-footer').click()
//     cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
//     cy.contains('Escolha o seu assento', { timeout: 20000 }).should('be.visible')
//     cy.wait(2000)
//     cy.selecionarDoisAssentosAleatorios({ timeout: 90000 });
//     cy.get('#btn-proceed', { timeout: 90000 }).should('be.visible').click()
//     cy.contains('Escolha o seu assento', { timeout: 90000 }).should('be.visible')
//     cy.wait(2000)
//     cy.selecionarDoisAssentosAleatorios({ timeout: 90000 });
//     cy.get('#btn-proceed', { timeout: 90000 }).should('be.visible').click();
//     // cy.wait(5000)
//     // cy.get('#tab-pix').click()
//     // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
//     //  Não finalizar a compra para evitar transações reais
//     // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
//   })

})