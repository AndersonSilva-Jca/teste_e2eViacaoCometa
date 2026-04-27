/// <reference types='cypress' />

const { faker } = require('@faker-js/faker');


describe('Login', () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.env(['login', 'senha']).then((env) => {
      cy.visit('/');
      cy.get(loc.HEADER.LOGIN_BUTTON).click()
      cy.get(loc.USUARIO).type(env.login)
      cy.get(loc.SENHA).type(env.senha, { log: false })
      cy.get(loc.BOTAO_LOGIN).click()
      cy.get(loc.MENSAGEM_LOGADO).should('contain', 'Olá')

    })

  });
  it('Deve fazer login com sucesso', () => {
    cy.get(loc.MENSAGEM_LOGADO).should('be.visible')
  });

  it('Deve preencher endereço do perfil', () => {
    cy.get(loc.MENSAGEM_LOGADO).click()
    cy.get('a[data-pagetype="edit-profile-page"]:visible').click()
    cy.get('.title-address-info > p').should('contain', 'Informações opcionais')
    // cy.get('#input-zipcode').clear().type('06455020')
    // cy.get('#input-address').clear().type(faker.location.streetAddress())
    // cy.get('#input-number').clear().type(faker.number.int({ min: 1, max: 1000 }))
    // cy.get('#input-city').clear().type(faker.location.city())
    // cy.get('#button-register').click({ force: true })
    // cy.get(':nth-child(3) > .xf-content-height > :nth-child(1) > .confirmation-alert > .container-confirmation > .message-confirmation-container > .content-message-confirmation > .confirmation-alert-body-par > .aem-Grid > :nth-child(1) > .cmp-text > p').should('contain', 'Tudo certo!')
  });;

  it('Minhas Viagens - Validar mensagem: Não encontramos nenhuma viagem futura em sua conta.', () => {
    cy.get('.logged-message').click()
    cy.get('a[href="https://www.viacaocometa.com.br/minhas-compras"]:visible').click()
    cy.get('.next-trips > :nth-child(1) > :nth-child(1) > .account-info > p').should('contain', 'Não encontramos nenhuma viagem futura em sua conta.')
  });

  it('Minhas Viagens - Validar mensagem: Não encontramos nenhuma viagem passada em sua conta.', () => {
    cy.get('.logged-message').click()
    cy.get('a[href="https://www.viacaocometa.com.br/minhas-compras"]:visible').click()
    cy.get('#button-tab-trip-edit > .cmp-text > p > [style="color: rgb(255,0,150);"]').click()
    cy.get('.previous-trips > .row > :nth-child(1) > .account-info > p').should('contain', 'Não encontramos nenhuma viagem passada em sua conta.')
  })

}); 