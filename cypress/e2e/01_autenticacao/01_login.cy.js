/// <reference types='cypress' />

const { faker } = require('@faker-js/faker');
const login = require('../../fixtures/login.json')

describe('Login', () => {
 beforeEach(() => {
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  cy.visit('https://www.viacaocometa.com.br', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      }
  });
  
});
 it('Deve fazer login com sucesso', () => {
      cy.get('#header-login-button').click()
      cy.get('#input-login').type(login.email)
      cy.get('#input-password').type(login.senha, { log: false })
      cy.get('#button-login').click()
      cy.get('.logged-message').should('contain', 'Olá')
    });

  it('Deve preencher endereço do perfil', () => {
    cy.login(login.email, login.senha)
    cy.get('.logged-message').click()
    cy.get('a[data-pagetype="edit-profile-page"]:visible').click()
    cy.get('.title-address-info > p').should('contain', 'Informações opcionais')
    cy.get('#input-zipcode').clear().type('06455020')
    cy.get('#input-address').clear().type(faker.location.streetAddress())
    cy.get('#input-number').clear().type(faker.number.int({ min: 1, max: 1000 }))
    cy.get('#input-city').clear().type(faker.location.city())
    cy.get('#button-register').click({force: true})
    cy.get(':nth-child(3) > .xf-content-height > :nth-child(1) > .confirmation-alert > .container-confirmation > .message-confirmation-container > .content-message-confirmation > .confirmation-alert-body-par > .aem-Grid > :nth-child(1) > .cmp-text > p').should('contain', 'Tudo certo!')
  });;

  it('Minhas Viagens - Validar mensagem: Não encontramos nenhuma viagem futura em sua conta.', () => {
    cy.login(login.email, login.senha)
    cy.get('.logged-message').click()
    cy.get('a[href="https://www.viacaocometa.com.br/minhas-compras"]:visible').click()
    cy.get('.next-trips > :nth-child(1) > :nth-child(1) > .account-info > p').should('contain', 'Não encontramos nenhuma viagem futura em sua conta.')  
  });
  
  it('Minhas Viagens - Validar mensagem: Não encontramos nenhuma viagem passada em sua conta.', () => {
    cy.login(login.email, login.senha)
    cy.get('.logged-message').click()
    cy.get('a[href="https://www.viacaocometa.com.br/minhas-compras"]:visible').click()
    cy.get('#button-tab-trip-edit > .cmp-text > p > [style="color: rgb(255,0,150);"]').click()
    cy.get('.previous-trips > .row > :nth-child(1) > .account-info > p').should('contain', 'Não encontramos nenhuma viagem passada em sua conta.')
  })

}); 