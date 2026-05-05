/// <reference types='cypress' />

import loc from '../../support/locators'
// const { faker } = require('@faker-js/faker');

describe('Fazer busca de destinos, selecionar datas, compra de passagens, selecionar assentos e finalizar compra', () => {

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
  it('Fazer busca de destinos IDA com 1 passageiro', () => {
    cy.get(loc.BUSCAS.DESTINO_IDA).click().type('São Paulo (Todos) (SP)', {delay: 100}).should('exist').invoke('show')
    cy.contains(' São Paulo (Todos) (SP) ').click({ force: true })
    cy.get(loc.BUSCAS.DESTINO_VOLTA).click().type('Rio de Janeiro (Todos) (RJ)', {delay: 100}).should('exist').invoke('show')
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').click({ force: true })
    cy.get(loc.BUSCAS.DATA_IDA).click()
    cy.get('[alt="loader"]').should('not.exist')
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
    // cy.get('[alt="loader"]').should('not.exist')
    // cy.get('#tab-pix').click()
    // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })

  it('Fazer busca de destinos IDA com 2 passageiros', () => {
    cy.get(loc.BUSCAS.DESTINO_IDA).click().type('São Paulo (Todos) (SP)', {delay: 100}).should('exist').invoke('show')
    cy.contains(' São Paulo (Todos) (SP) ').click()
    cy.get(loc.BUSCAS.DESTINO_VOLTA).click().type('Rio de Janeiro (Todos) (RJ)', {delay: 100}).should('exist').invoke('show')
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').click()
    cy.get(loc.BUSCAS.DATA_IDA).click()
    cy.selecionarDataIda(1)
    cy.get(loc.BUSCAS.BOTAO_PASSAGEIROS).click()
    cy.get(loc.BUSCAS.BOTAO_ADICIONAR_PASSAGEIRO).click()
    cy.get(loc.BUSCAS.BOTAO_FECHAR_QUANTIDADE_PASSAGEIROS).click()
    cy.get(loc.BUSCAS.BOTAO_BUSCAR).click()
    cy.wait(15000)
    cy.selecionarPassagemAleatoria1({ timeout: 90000 })
    cy.wait(2000)
    cy.get(loc.CHECK_PASSAGEIRO, { timeout: 15000 }).click({ force: true })
    cy.get(loc.NOME_PASSAGEIRO_2).click()
    cy.contains('Teste Robo ODP').should('be.visible').click()
    cy.get(loc.DATA_ANIVERSARIO_PASSAGEIRO_2).type('01011990')
    cy.get(loc.CLICK_PASSAGEIROS).click()
    cy.get(loc.BOTAO_AVANCAR).should('be.visible').and('not.be.disabled').click();
    cy.contains('Escolha o seu assento', { timeout: 90000 }).should('be.visible')
    cy.wait(10000)
    cy.selecionarDoisAssentosAleatorios('IDA', { timeout: 90000 });
    cy.get(loc.BOTAO_AVANCAR, { timeout: 90000 }).should('be.visible').click()
    // cy.contains('Cartões de crédito').should('be.visible')
    // cy.get('[alt="loader"]').should('not.exist')
    // cy.get('#tab-pix').should('be.visible').click()
    // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
    //  Não finalizar a compra para evitar transações reais
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })

  it('Fazer busca de destinos IDA com 1 passageiro e 1 criança sem assento', () => {
    cy.get(loc.BUSCAS.DESTINO_IDA).click().type('São Paulo (Todos) (SP)', {delay: 100}).should('exist').invoke('show')
    cy.contains(' São Paulo (Todos) (SP) ').should('exist').invoke('show').click()
    cy.get(loc.BUSCAS.DESTINO_VOLTA).click().type('Rio de Janeiro (Todos) (RJ)', {delay: 100}).should('exist').invoke('show')
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').should('exist').invoke('show').click()
    cy.get(loc.BUSCAS.DATA_IDA).click()
    cy.selecionarDataIda(1)
    cy.get(loc.BUSCAS.BOTAO_PASSAGEIROS).click()
    cy.get(loc.BUSCAS.BOTAO_ADICIONAR_PASSAGEIRO).click()
    cy.get(loc.BUSCAS.BOTAO_FECHAR_QUANTIDADE_PASSAGEIROS).click()
    cy.get(loc.BUSCAS.BOTAO_BUSCAR).click()
    cy.contains('IDA', { timeout: 90000 }).should('be.visible');
    cy.wait(5000)
    cy.selecionarPassagemAleatoria1({ timeout: 90000 })
    cy.wait(10000)
    cy.get(loc.CHECK_PASSAGEIRO, { timeout: 90000 }).click({ force: true })
    cy.get(loc.NOME_PASSAGEIRO_2).click()
    cy.contains('Teste Menor de Idade ODP').should('be.visible').click()
    cy.get(loc.DATA_ANIVERSARIO_PASSAGEIRO_2).type('23032023')
    cy.get('.passenger-footer').click()
    cy.get(loc.BOTAO_AVANCAR).should('be.visible').and('not.be.disabled').click();
    cy.contains('Escolha o seu assento', { timeout: 90000 }).should('be.visible');
    cy.wait(5000)
    cy.selecionarDoisAssentosAleatorios('IDA', { timeout: 90000 });
    cy.get(loc.BOTAO_AVANCAR, { timeout: 90000 }).should('be.visible').click()
    // cy.url().should('include', '/pagamento')
    // cy.get('[alt="loader"]').should('not.exist')
    // cy.get('#tab-pix').click()
    // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
    //  Não finalizar a compra para evitar transações reais
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })

  it('Fazer busca de destinos IDA e Volta com 1 passageiro', () => {
    cy.get(loc.BUSCAS.DESTINO_IDA).click().type('São Paulo (Todos) (SP)', {delay: 100}).should('exist').invoke('show')
    cy.contains(' São Paulo (Todos) (SP) ').click().should('exist').invoke('show')
    cy.get(loc.BUSCAS.DESTINO_VOLTA).click().type('Rio de Janeiro (Todos) (RJ)', {delay: 100}).should('exist').invoke('show')
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').click().should('exist').invoke('show')
    cy.get(loc.BUSCAS.DATA_IDA).click()
    cy.selecionarDataIda(1)
    cy.get(loc.BUSCAS.DATA_VOLTA).click()
    cy.selecionarDataVolta(6)
    cy.get(loc.BUSCAS.BOTAO_BUSCAR).click()
    cy.wait(5000)
    cy.selecionarPassagemAleatoria1({ timeout: 90000 })
    cy.contains('ESCOLHER PASSAGENS', { timeout: 90000 }).should('be.visible');
    cy.wait(25000)
    cy.contains('ESCOLHER PASSAGENS', { timeout: 90000 }).should('be.visible');
    cy.selecionarPassagemAleatoria1({ timeout: 90000 })
    cy.wait(15000)
    cy.get(loc.CHECK_PASSAGEIRO, { timeout: 60000 }).click({ force: true })
    cy.get(loc.BOTAO_AVANCAR).should('be.visible').and('not.be.disabled').click({ force: true });
    cy.url({ timeout: 60000 }).should('include', '/poltrona')
    cy.wait(8000)
    cy.contains('Escolha o seu assento', { timeout: 20000 }).should('be.visible')
    cy.selecionarAssentoAleatorio1({ timeout: 15000 });
    cy.wait(8000)
    cy.get(loc.BOTAO_AVANCAR).should('be.visible').and('not.be.disabled').click({ force: true });
    cy.url({ timeout: 60000 }).should('include', '/poltrona')
    cy.wait(8000)
    cy.selecionarAssentoAleatorio1({ timeout: 15000 });
    cy.get(loc.BOTAO_AVANCAR).should('be.visible').and('not.be.disabled').click({ force: true });
    cy.url({ timeout: 60000 }).should('include', '/pagamento')
    // cy.get('[alt="loader"]').should('not.exist')
    //   cy.get('#tab-pix').click() 
    //   cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
    // Não finalizar a compra para evitar transações reais
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })

  it('Fazer busca de destinos IDA e Volta com 2 passageiros', () => {
    cy.clearCookies();
    cy.get(loc.BUSCAS.DESTINO_IDA).click().type('São Paulo (Todos) (SP)', {delay: 100}).should('exist').invoke('show')
    cy.contains(' São Paulo (Todos) (SP) ').click()
    cy.get(loc.BUSCAS.DESTINO_VOLTA).click().type('Rio de Janeiro (Todos) (RJ)', {delay: 100}).should('exist').invoke('show')
    cy.contains(' Rio de Janeiro (Todos) (RJ) ').click()
    cy.get(loc.BUSCAS.DATA_IDA).click()
    cy.selecionarDataIda(1)
    cy.get(loc.BUSCAS.DATA_VOLTA).click()
    cy.selecionarDataVolta(6)
    cy.get(loc.BUSCAS.BOTAO_PASSAGEIROS).click()
    cy.get(loc.BUSCAS.BOTAO_ADICIONAR_PASSAGEIRO).click()
    cy.get(loc.BUSCAS.BOTAO_FECHAR_QUANTIDADE_PASSAGEIROS).click()
    cy.get(loc.BUSCAS.BOTAO_BUSCAR).click()
    // cy.wait(5000)
    cy.get('[alt="loader"]').should('be.visible')
    cy.selecionarPassagemAleatoria1({ timeout: 90000 })
    // cy.wait(30000)
    cy.get('[alt="loader"]').should('not.exist')
    cy.selecionarPassagemAleatoria1({ timeout: 90000 })
    // cy.wait(5000)
    cy.get(loc.CHECK_PASSAGEIRO, { timeout: 20000 }).click({ force: true })
    cy.get(loc.NOME_PASSAGEIRO_2).click()
    cy.contains('Teste Robo ODP').should('be.visible').click()
    cy.get(loc.DATA_ANIVERSARIO_PASSAGEIRO_2).type('01011990')
    cy.get(loc.CLICK_PASSAGEIROS).click()
    cy.get(loc.BOTAO_AVANCAR).should('be.visible').and('not.be.disabled').click();
    cy.contains('Escolha o seu assento', { timeout: 20000 }).should('be.visible')
    cy.wait(2000)
    cy.selecionarDoisAssentosAleatorios({ timeout: 90000 });
    cy.get(loc.BOTAO_AVANCAR, { timeout: 90000 }).should('be.visible').click()
    cy.contains('Escolha o seu assento', { timeout: 90000 }).should('be.visible')
    cy.wait(2000)
    cy.selecionarDoisAssentosAleatorios({ timeout: 90000 });
    cy.get(loc.BOTAO_AVANCAR, { timeout: 90000 }).should('be.visible').click();
    // cy.get('[alt="loader"]').should('not.exist')
    // cy.wait(5000)
    // cy.get('#tab-pix').click()
    // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
    //  Não finalizar a compra para evitar transações reais
    // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
  })

})