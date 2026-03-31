/// <reference types='cypress' />

describe('', () => {
 beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('https://www.viacaocometa.com.br');});
it('Deve preencher o formulário de contato', () => {
  cy.get('.header-nav-container > :nth-child(1) > :nth-child(2)').click()
  cy.url({timeout: 2000}).should('include', '/fale-conosco')
  cy.get('#input-name').type('Teste ROBO ODP')
  cy.get('#input-doc').type('38485984854', { log: false })
  cy.get('#input-email').type('teste.robo@odp.com.br')
  cy.get('#input-ddd').type('11')
  cy.get('#input-phone').type('99999-9999', { log: false })
  cy.get('#btn-contact-us').click()
  cy.get('.container-form-protocol-contact-us > .title-form > .aem-Grid > .text > .cmp-text > p').should('contain', 'Faça sua requisição')
  cy.get(':nth-child(1) > :nth-child(1) > .field > .input-container > .select-custom > .select-selected').click()
  cy.get(':nth-child(1) > :nth-child(1) > .field > .input-container > .select-custom > .select-items > :nth-child(4) > [href="javascript:void(0)"]').click()
  cy.get(':nth-child(2) > .field > .input-container > .select-custom > .select-selected').click()
  cy.get(':nth-child(2) > .field > .input-container > .select-custom > .select-items > :nth-child(2) > [href="javascript:void(0)"]').click()
  cy.get(':nth-child(3) > .input-container > .field > .select-custom > .select-selected').click()
  cy.get('.field > .select-custom > .select-items > :nth-child(2) > [href="javascript:void(0)"]').click()
   cy.get('#input-local').type('Sao Paulo')
  cy.contains('SAO PAULO ROD TIETE(SP)').click()
  cy.get('#has-bought').click({force: true})
  cy.get('#description').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
  cy.get('[for="protocol-file"] > .cmp-text > [style="text-align: left;"]').click()
  cy.get('#input-date-buy').click()
  cy.selecionarDataCompra(1)
  cy.get('#input-date-trip').click()
  cy.selecionarDataViagem(6)
  cy.get('#input-origin').type('Sao Paulo')
  cy.get('#ui-id-733').click()
  cy.get('#input-dest').type('Rio de Janeiro')
  cy.get('#ui-id-1074').click()
  cy.get('[data-js="protocol-file"]').selectFile('cypress/fixtures/documento.pdf', { force: true })
  // Não finalizar a solicitação para evitar requisições reais
  // cy.get('#submit-protocol').click()
  })
});