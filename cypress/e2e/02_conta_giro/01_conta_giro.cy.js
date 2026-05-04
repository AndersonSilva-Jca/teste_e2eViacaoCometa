/// <reference types='cypress' />

const { faker } = require('@faker-js/faker');

import loc from '../../support/locators'

describe('Conta GIRO', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.env(['login', 'senha']).then((env) => {
      cy.visit('/');
      cy.get(loc.HEADER_BOTAO_LOGIN).click()
      cy.get(loc.USUARIO).type(env.login)
      cy.get(loc.SENHA).type(env.senha, { log: false })
      cy.get(loc.BOTAO_LOGIN).click()
      cy.get(loc.MENSAGEM_LOGADO).if('not.be.visible').get('.normal').should('contain', 'O email ou senha inseridos não constam em nosso cadastro').else().log('Login realizado com sucesso').should('contain', 'Olá')

    })
  });
  it('Fazer compra de passagem com conta GIRO ', () => {
    cy.get(loc.BUSCAS.DESTINO_IDA).click().type('São Paulo (Todos) (SP)', {delay: 100}).should('exist').invoke('show')
    cy.contains(' São Paulo (Todos) (SP) ').click({ force: true })
    cy.get(loc.BUSCAS.DESTINO_VOLTA).click().type('Rio de Janeiro (Todos) (RJ)', {delay: 100}).should('exist').invoke('show')
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').click({ force: true })
    cy.get(loc.BUSCAS.DATA_IDA).click()
    cy.selecionarDataIda(2)
    cy.get(loc.BUSCAS.BOTAO_BUSCAR, { timeout: 90000 }).should('be.visible').click()
    cy.wait(5000);
    cy.selecionarPassagemAleatoria1({ timeout: 90000 })
    cy.wait(2000);
    cy.get(loc.CHECK_PASSAGEIRO, { timeout: 90000 }).click({ force: true })
    cy.get(loc.BOTAO_AVANCAR).should('be.visible').and('not.be.disabled').click();
    cy.wait(5000);
    cy.contains('Escolha o seu assento', { timeout: 90000 }).should('be.visible');
    cy.selecionarAssentoAleatorio({ timeout: 90000 });
    cy.get(loc.BOTAO_AVANCAR, { timeout: 90000 }).should('be.visible').click()
    // cy.url().should('include', '/pagamento')
    // cy.wait(10000);
    // cy.url().should('include', '/pagamento')
    cy.get('[alt="loader"]').should('not.exist')
    cy.get('#tab-conta-giro').click()
    // cy.get('[data-js="conditions-check"]').click({ force: true })
    // cy.get('.btn-register > [type="button"]').should('be.visible').and('not.be.disabled').click()
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