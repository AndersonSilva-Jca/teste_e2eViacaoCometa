/// <reference types='cypress' />

import loc from '../../support/locators.js'

describe('UTP - Fazer busca de destinos, selecionar datas, compra de passagens, selecionar assentos e finalizar compra', () => {

  beforeEach(() => {
    cy.clearCookies();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });

  it('1001 - Fazer busca de destinos IDA com 1 passageiro', () => {
    cy.env(['login1', 'senha1']).then((env) => {
      cy.visit('https://www.autoviacao1001.com.br');
      cy.get(loc.HEADER_BOTAO_LOGIN).click()
      cy.get(loc.USUARIO).type(env.login1)
      cy.get(loc.SENHA).type(env.senha1, { log: false })
      cy.get(loc.BOTAO_LOGIN).click()
      cy.get(loc.MENSAGEM_LOGADO).if('not.be.visible').get('.normal').should('contain', 'O email ou senha inseridos não constam em nosso cadastro').else().log('Login realizado com sucesso').should('contain', 'Olá')
    })
    cy.get(loc.BUSCAS.DESTINO_IDA).click().type('São Paulo (Todos) (SP)', { delay: 100 }).should('exist').invoke('show')
    cy.contains(' São Paulo (Todos) (SP) ').click({ force: true })
    cy.get(loc.BUSCAS.DESTINO_VOLTA).click().type('Rio de Janeiro (Todos) (RJ)', { delay: 100 }).should('exist').invoke('show')
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').click({ force: true })
    cy.get(loc.BUSCAS.DATA_IDA).click()
    cy.get(loc.LOADER).should('not.exist')
    cy.selecionarDataIda(2)
    cy.get(loc.BUSCAS.BOTAO_BUSCAR, { timeout: 90000 }).should('be.visible').click()
    cy.wait(5000)
    cy.selecionarPassagemAleatoria1({ timeout: 90000 })
    cy.wait(2000)
    cy.get(loc.CHECK_PASSAGEIRO, { timeout: 90000 }).click({ force: true })
    cy.get(loc.BOTAO_AVANCAR).should('be.visible').and('not.be.disabled').click();
    cy.contains('Escolha o seu assento', { timeout: 90000 }).should('be.visible');
    cy.selecionarAssentoAleatorio({ timeout: 90000 });
    cy.get(loc.BOTAO_AVANCAR).should('be.visible').click()
    // cy.get('[alt="loader"]').should('not.be.visible')
    // cy.url({ timeout: 90000 }).should('include', '/pagamento')
    // Não finalizar a compra para evitar transações reais
    // cy.get(loc.LOADER).should('not.exist')
    // cy.get('#tab-pix').click()
    // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })

  it('Catarinense - Fazer busca de destinos IDA com 1 passageiro', () => {
    cy.env(['login1', 'senha1']).then((env) => {
      cy.visit('https://www.catarinense.com.br/');
      cy.get(loc.HEADER_BOTAO_LOGIN).click()
      cy.get(loc.USUARIO).type(env.login1)
      cy.get(loc.SENHA).type(env.senha1, { log: false })
      cy.get(loc.BOTAO_LOGIN).click()
      cy.get(loc.MENSAGEM_LOGADO).if('not.be.visible').get('.normal').should('contain', 'O email ou senha inseridos não constam em nosso cadastro').else().log('Login realizado com sucesso').should('contain', 'Olá')
    })
    cy.get(loc.BUSCAS.DESTINO_IDA).click().type('São Paulo (Todos) (SP)', { delay: 100 }).should('exist').invoke('show')
    cy.contains(' São Paulo (Todos) (SP) ').click({ force: true })
    cy.get(loc.BUSCAS.DESTINO_VOLTA).click().type('Rio de Janeiro (Todos) (RJ)', { delay: 100 }).should('exist').invoke('show')
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').click({ force: true })
    cy.get(loc.BUSCAS.DATA_IDA).click()
    cy.get(loc.LOADER).should('not.exist')
    cy.selecionarDataIda(2)
    cy.get(loc.BUSCAS.BOTAO_BUSCAR, { timeout: 90000 }).should('be.visible').click()
    cy.wait(5000)
    cy.teste({ timeout: 90000 })
    cy.wait(2000)
    cy.get(loc.CHECK_PASSAGEIRO, { timeout: 90000 }).click({ force: true })
    cy.get(loc.BOTAO_AVANCAR).should('be.visible').and('not.be.disabled').click();
    cy.contains('Escolha o seu assento', { timeout: 90000 }).should('be.visible');
    cy.selecionarAssentoAleatorio({ timeout: 90000 });
    cy.get(loc.BOTAO_AVANCAR).should('be.visible').click()
    // cy.get(loc.LOADER).should('not.be.visible')
    // cy.url({ timeout: 90000 }).should('include', '/pagamento')
    // Não finalizar a compra para evitar transações reais
    // cy.get(loc.LOADER).should('not.exist')
    // cy.get('#tab-pix').click()
    // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })

  it('Expresso Sul - Fazer busca de destinos IDA com 1 passageiro', () => {
    cy.env(['login1', 'senha1']).then((env) => {
      cy.visit('https://www.expressodosul.com.br/');
      cy.get(loc.HEADER_BOTAO_LOGIN).click()
      cy.get(loc.USUARIO).type(env.login1)
      cy.get(loc.SENHA).type(env.senha1, { log: false })
      cy.get(loc.BOTAO_LOGIN).click()
      cy.get(loc.MENSAGEM_LOGADO).if('not.be.visible').get('.normal').should('contain', 'O email ou senha inseridos não constam em nosso cadastro').else().log('Login realizado com sucesso').should('contain', 'Olá')
    })
    cy.get(loc.BUSCAS.DESTINO_IDA).click().type('São Paulo (Todos) (SP)', { delay: 100 }).should('exist').invoke('show')
    cy.contains(' São Paulo (Todos) (SP) ').click({ force: true })
    cy.get(loc.BUSCAS.DESTINO_VOLTA).click().type('Rio de Janeiro (Todos) (RJ)', { delay: 100 }).should('exist').invoke('show')
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').click({ force: true })
    cy.get(loc.BUSCAS.DATA_IDA).click()
    cy.get(loc.LOADER).should('not.exist')
    cy.selecionarDataIda(2)
    cy.get(loc.BUSCAS.BOTAO_BUSCAR, { timeout: 90000 }).should('be.visible').click()
    cy.wait(5000)
    cy.teste({ timeout: 90000 })
    cy.wait(2000)
    cy.get(loc.CHECK_PASSAGEIRO, { timeout: 90000 }).click({ force: true })
    cy.get(loc.BOTAO_AVANCAR).should('be.visible').and('not.be.disabled').click();
    cy.contains('Escolha o seu assento', { timeout: 90000 }).should('be.visible');
    cy.selecionarAssentoAleatorio({ timeout: 90000 });
    cy.get(loc.BOTAO_AVANCAR).should('be.visible').click()
    // cy.get(loc.LOADER).should('not.be.visible')
    // cy.url({ timeout: 90000 }).should('include', '/pagamento')
    // Não finalizar a compra para evitar transações reais
    // cy.get(loc.LOADER).should('not.exist')
    // cy.get('#tab-pix').click()
    // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })
  it('Rapidão Ribeirão - Fazer busca de destinos IDA com 1 passageiro', () => {
    cy.env(['login1', 'senha1']).then((env) => {
      cy.visit('https://www.rapidoribeiraopreto.com.br/');
      cy.get(loc.HEADER_BOTAO_LOGIN).click()
      cy.get(loc.USUARIO).type(env.login1)
      cy.get(loc.SENHA).type(env.senha1, { log: false })
      cy.get(loc.BOTAO_LOGIN).click()
      cy.get(loc.MENSAGEM_LOGADO).if('not.be.visible').get('.normal').should('contain', 'O email ou senha inseridos não constam em nosso cadastro').else().log('Login realizado com sucesso').should('contain', 'Olá')
    })
    cy.get(loc.BUSCAS.DESTINO_IDA).click().type('São Paulo (Todos) (SP)', { delay: 100 }).should('exist').invoke('show')
    cy.contains(' São Paulo (Todos) (SP) ').click({ force: true })
    cy.get(loc.BUSCAS.DESTINO_VOLTA).click().type('Rio de Janeiro (Todos) (RJ)', { delay: 100 }).should('exist').invoke('show')
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').click({ force: true })
    cy.get(loc.BUSCAS.DATA_IDA).click()
    cy.get(loc.LOADER).should('not.exist')
    cy.selecionarDataIda(2)
    cy.get(loc.BUSCAS.BOTAO_BUSCAR, { timeout: 90000 }).should('be.visible').click()
    cy.wait(5000)
    cy.teste({ timeout: 90000 })
    cy.wait(2000)
    cy.get(loc.CHECK_PASSAGEIRO, { timeout: 90000 }).click({ force: true })
    cy.get(loc.BOTAO_AVANCAR).should('be.visible').and('not.be.disabled').click();
    cy.contains('Escolha o seu assento', { timeout: 90000 }).should('be.visible');
    cy.selecionarAssentoAleatorio({ timeout: 90000 });
    cy.get(loc.BOTAO_AVANCAR).should('be.visible').click()
    // cy.get(loc.LOADER).should('not.be.visible')
    // cy.url({ timeout: 90000 }).should('include', '/pagamento')
    // Não finalizar a compra para evitar transações reais
    // cy.get(loc.LOADER).should('not.exist')
    // cy.get('#tab-pix').click()
    // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })
  
})