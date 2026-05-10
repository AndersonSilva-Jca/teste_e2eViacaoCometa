/// <reference types='cypress' />

const {faker} = require("@faker-js/faker")


describe('Validar link informações de viagens', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
  });
  it('Validar link informações de Viagem - Bagagem', () => {
    cy.get('.header-nav-container > :nth-child(1) > :nth-child(1) > .focusable').click()
    cy.url().should('include', 'informacao-para-sua-viagem')
    cy.get('.aem-Grid--12 > :nth-child(4) > .custom-padding > .container > :nth-child(1) > .aem-Grid > .image > .cmp-image > #cmp-image-link > .cmp-image__image').click()
    cy.get('#bagagemdemao > p').should('contain', 'Bagagem de mão')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#bagagemdespachada"] > .btn-title').click()
    cy.get('#bagagemdespachada > [style="text-align: left;"]').should('contain', 'Bagagem despachada no bagageiro')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#bagagemproibida"]').click()
    cy.get('#bagagemproibida > p').should('contain', 'Bagagem proibida')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#bagagensespeciaiseesportivas"] > .btn-title').click()
    cy.get('#bagagensespeciaiseesportivas > p').should('contain', 'Bagagens especiais e esportivas')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#bagagensextraviadas"] > .btn-title').click()
    cy.get('#bagagensextraviadas > p').should('contain', 'Bagagens extraviadas ou danificadas')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#objetosesquecidos"] > .btn-title').click()
    cy.get('#objetosesquecidos > p').should('contain', 'Objetos esquecidos no interior do veículo')
    cy.scrollTo('top')
    cy.get('[href="#cobranca"] > .btn-title').click()
    cy.get('#cobranca > p').should('contain', 'Cobrança por excesso de bagagem')
  })

  it('Validar link informações de Viagem - Informações para embarque', () => {
    cy.get('.header-nav-container > :nth-child(1) > :nth-child(1) > .focusable').click()
    cy.url().should('include', 'informacao-para-sua-viagem')
    cy.get('.aem-Grid--12 > :nth-child(5) > .custom-padding > .container > :nth-child(1) > .aem-Grid > .image > .cmp-image > #cmp-image-link > .cmp-image__image').click()
    cy.get('[href="#documentacaoparaembarque"] > .btn-title').click()
    cy.get('#documentacaoparaembarque > p').should('contain', 'Documentação para embarque')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#embarqueparamenores"] > .btn-title').click()
    cy.get('#embarqueparamenores > p').should('contain', 'Embarque para Menores')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#horariodeembarque"]').click()
    cy.get('#horariodeembarque > p').should('contain', 'Horário de embarque')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#transportedeanimais"]').click()
    cy.get('#transportedeanimais > p').should('contain', 'Transporte de Animais')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#segurofacultativo"]').click()
    cy.get('#segurofacultativo > p').should('contain', 'Seguro Facultativo')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#alteracoesdehorario"]').click()
    cy.get('#alteracoesdehorario > p').should('contain', 'Alterações de Horários e Frequências')
    cy.scrollTo('top', { timeout: 1000 })
  });

  it('Validar link informações de Viagem - Compra, remarcação e reembolso', () => {
    cy.get('.header-nav-container > :nth-child(1) > :nth-child(1) > .focusable').click()
    cy.url().should('include', 'informacao-para-sua-viagem')
    cy.get('[style="padding: 0rem 2rem 2rem 2rem "] > :nth-child(1) > .aem-Grid--12 > :nth-child(1) > .custom-padding > .container > :nth-child(1) > .aem-Grid > .image > .cmp-image > #cmp-image-link > .cmp-image__image').click()
    cy.get('[href="#formasdepagamento"]').click()
    cy.get('#formasdepagamento > p').should('contain', 'Formas de Pagamento')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#remarcacaoetroca"]').click()
    cy.get('#remarcacaoetroca > p').should('contain', 'Remarcação e Troca')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#cancelamentoereembolso"]').click()
    cy.get('#cancelamentoereembolso > p').should('contain', 'Cancelamento e Reembolso')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#reacomodacao"]').click()
    cy.get('#reacomodacao > p').should('contain', 'Reacomodações')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#taxas"]').click()
    cy.get('#taxas > p').should('contain', 'Taxas de serviços')
    cy.scrollTo('top', { timeout: 1000 })
  });

  it('Validar link informações de Viagem - Nossos serviços', () => {
    cy.get('.header-nav-container > :nth-child(1) > :nth-child(1) > .focusable').click()
    cy.url().should('include', 'informacao-para-sua-viagem')
    cy.get(':nth-child(2) > .custom-padding > .container > :nth-child(1) > .aem-Grid > .image > .cmp-image > #cmp-image-link > .cmp-image__image').click()
    cy.get('[href="#nossosonibus"]').click()
    cy.get('#nossosonibus > p').should('contain', 'Conheça Nossos Ônibus')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#salasvips"]').click()
    cy.get('#salasvips > p').should('contain', 'SALAS VIPS')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#salasnets"]').click()
    cy.get('[style="margin: auto auto auto auto "] > [style="padding: 2rem 2rem 2rem 2rem "] > :nth-child(1) > .aem-Grid--phone--12 > :nth-child(1) > #salasnets > p').should('contain', 'SALAS NETS')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#clubegiro"]').click()
    cy.get('#clubegiro > [style="padding: 2rem 2rem 2rem 2rem "] > :nth-child(1) > .aem-Grid--phone--12 > :nth-child(1) > #salasnets > p').should('contain', 'CLUBE GIRO')

  });

  it('Validar link informações de Viagem - Descontos e Gratuidades', () => {
    cy.get('.header-nav-container > :nth-child(1) > :nth-child(1) > .focusable').click()
    cy.url().should('include', 'informacao-para-sua-viagem')
    cy.get(':nth-child(4) > :nth-child(2) > :nth-child(2) > :nth-child(1) > .aem-Grid--12 > .cmp > .custom-padding > .container > :nth-child(1) > .aem-Grid > .image > .cmp-image > #cmp-image-link > .cmp-image__image').click()
    cy.get('[href="#estudante"]').click()
    cy.get('#estudante > p').should('contain', 'Estudante e Professor')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#PCD"]').click()
    cy.get('#PCD > p').should('contain', 'Pessoa com deficiência')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#idoso"]').click()
    cy.get('#idoso > p').should('contain', 'Idoso')
    cy.scrollTo('top', { timeout: 1000 })
    cy.get('[href="#IDJovem"]').click()
    cy.get('#IDJovem > p').should('contain', 'ID Jovem')
  });

  it('Deve Validar link fale conosco e preencher o formulário de contato', () => {
    cy.get('.header-nav-container > :nth-child(1) > :nth-child(2) > .focusable').click()
    cy.url({ timeout: 2000 }).should('include', '/fale-conosco')
    // cy.get('#input-name').type('Teste Automação ODP')
    // cy.get('#input-doc').type('38485984854', { log: false })
    // cy.get('#input-email').type('teste.robo@odp.com.br')
    // cy.get('#input-ddd').type('11')
    // cy.get('#input-phone').type('99999-9999', { log: false })
    // cy.get('#btn-contact-us').should('not.be.disabled').click()
    // cy.get('.container-form-protocol-contact-us > .title-form > .aem-Grid > .text > .cmp-text > p').should('contain', 'Faça sua requisição')
    // cy.get(':nth-child(1) > :nth-child(1) > .field > .input-container > .select-custom > .select-selected').click()
    // cy.get(':nth-child(1) > :nth-child(1) > .field > .input-container > .select-custom > .select-items > :nth-child(4) > [href="javascript:void(0)"]').click()
    // cy.get(':nth-child(2) > .field > .input-container > .select-custom > .select-selected').click()
    // cy.get(':nth-child(2) > .field > .input-container > .select-custom > .select-items > :nth-child(2) > [href="javascript:void(0)"]').click()
    // cy.get(':nth-child(3) > .input-container > .field > .select-custom > .select-selected').click()
    // cy.get('.field > .select-custom > .select-items > :nth-child(2) > [href="javascript:void(0)"]').click()
    // cy.get('#input-local').type('Sao Paulo')
    // cy.contains('SAO PAULO ROD TIETE(SP)').click()
    // cy.get('#has-bought').click({ force: true })
    // cy.get('#input-date-buy').click()
    // cy.selecionarDataCompra(1)
    // cy.get('#input-date-trip').click()
    // cy.selecionarDataViagem(6)
    // cy.get('#input-origin').type('AGUAS DA PRATA(SP)')
    // cy.contains('AGUAS DA PRATA(SP)').click({ force: true })
    // cy.get('#input-dest').type('AGUAS DA PRATA - M. DIVISORIO(SP)')
    // cy.contains('AGUAS DA PRATA - M. DIVISORIO(SP)').click({ force: true })
    // cy.get('#description').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit ame.')
    // cy.get('[for="protocol-file"] > .cmp-text > [style="text-align: left;"]').click()
    // cy.get('[data-js="protocol-file"]').selectFile('cypress/fixtures/documento.pdf', { force: true })
    // Não finalizar a solicitação para evitar requisições reais
    // cy.get('#submit-protocol').click()
  })
  it('Deve redirecionar para a página de gratuidade', () => {
    cy.get('.header-nav-container > :nth-child(1) > :nth-child(3) > .focusable').invoke('removeAttr', 'target').click();
    cy.url().should('include', 'https://vendas.jcaholding.com.br/'); //erro
  })
  it('Deve redirecionar para a página de nossos destinos', () => {
    cy.get('.header-nav-container > :nth-child(1) > :nth-child(4) > .focusable').click();
    cy.url().should('include', '/nossos-destinos');
  })

  it('Deve redirecionar para a página de pontos de venda', () => {
    cy.get('.header-nav-container > :nth-child(1) > :nth-child(5) > .focusable').click();
    cy.url().should('include', '/pontos-de-venda');
  })

  it('Deve redirecionar para o site Clube Giro com sucesso', () => {
    cy.get(':nth-child(1) > :nth-child(6) > .focusable').click()
    cy.url().should('include', '/clubegiro')
    //   cy.get('a[href="https://www.clubegiro.com.br"]').click()
    //   cy.url().should('include', 'clubegiro.com.br')
  })

});