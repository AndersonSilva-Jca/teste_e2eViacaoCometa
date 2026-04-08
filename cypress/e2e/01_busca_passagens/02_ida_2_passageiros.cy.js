// /// <reference types='cypress' />


// //TESTES OK

// const { faker } = require('@faker-js/faker');
// const login = require('../../fixtures/login.json')

// describe('Fazer busca de destinos', () => {
//   beforeEach(() => {
//     cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
//     cy.visit('https://www.viacaocometa.com.br');
//   });

//   it('Fazer busca de destinos IDA com 2 passageiros', () => {
//     cy.login(login.email, login.senha, { timeout: 2000 })
//     cy.get('#input-departure').click().type('São Paulo')
//     cy.contains(' São Paulo (Todos) (SP) ').click()
//     cy.get('#input-destination').click().type('Rio de Janeiro')
//     cy.contains(' Rio de Janeiro (Todos) (RJ) ').click()
//     cy.get('#input-date').click()
//     cy.selecionarDataIda(1)
//     cy.get('#input-passengers').click()
//     cy.get('#passenger-quantity-plus-one > .plusone').click()
//     cy.get('#close-person-quantity').click()
//     cy.get('#search-button', { timeout: 2000 }).click()
//     cy.wait(10000)
//     cy.selecionarPassagemIda()
//     cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
//     cy.get('#input-name-2').click()
//     cy.contains('Teste Robo ODP').should('be.visible').click()
//     cy.get('#input-birth-2').type('01011990')
//     cy.get('.passenger-footer').click()
//     cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
//     cy.contains('Escolha o seu assento', { timeout: 20000 }).should('be.visible')
//     cy.wait(10000)
//     cy.selecionarDoisAssentosAleatorios('IDA', { timeout: 5000 });
//     cy.get('#btn-proceed', { timeout: 10000 }).should('be.visible').click()
//     cy.wait(2000)
//     // cy.contains('Cartões de crédito').should('be.visible')
//     // cy.get('#tab-pix').click()
//     // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
//     //  Não finalizar a compra para evitar transações reais
//     // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
//   })  
// })


/// <reference types='cypress' />

// TESTES OK
const { faker } = require('@faker-js/faker');

// REMOVEMOS: const login = require('../../fixtures/login.json')
// Agora os dados virão das variáveis de ambiente

describe('Fazer busca de destinos', () => {
  
  // Definimos as variáveis pegando do ambiente (GitHub) ou de um plano B (Local)
  const userEmail = Cypress.env('email') || 'seu_email_local@teste.com';
  const userSenha = Cypress.env('senha') || 'sua_senha_local';

  beforeEach(() => {
    // Limpeza de cache para evitar sessões presas
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('https://www.viacaocometa.com.br');
  });

  it('Fazer busca de destinos IDA com 2 passageiros', () => {
    // Usamos as constantes que definimos acima
    cy.login(userEmail, userSenha, { timeout: 2000 });

    cy.get('#input-departure').click().type('São Paulo');
    cy.contains(' São Paulo (Todos) (SP) ').click();
    cy.get('#input-destination').click().type('Rio de Janeiro');
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').click();
    cy.get('#input-date').click();
    cy.selecionarDataIda(1);
    
    cy.get('#input-passengers').click();
    cy.get('#passenger-quantity-plus-one > .plusone').click();
    cy.get('#close-person-quantity').click();
    
    cy.get('#search-button', { timeout: 2000 }).click();
    
    // Aguarda o carregamento das passagens
    cy.wait(10000);
    cy.selecionarPassagemIda();
    
    cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true });
    cy.get('#input-name-2').click();
    cy.contains('Teste Robo ODP').should('be.visible').click();
    cy.get('#input-birth-2').type('01011990');
    cy.get('.passenger-footer').click();
    
    cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
    
    cy.contains('Escolha o seu assento', { timeout: 20000 }).should('be.visible');
    cy.wait(10000);
    
    cy.selecionarDoisAssentosAleatorios('IDA', { timeout: 5000 });
    cy.get('#btn-proceed', { timeout: 10000 }).should('be.visible').click();
    
    cy.wait(2000);
    cy.url().should('include', '/pagamento');
  });
});