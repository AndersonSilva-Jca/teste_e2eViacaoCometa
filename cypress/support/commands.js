// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
  // cy.visit('https://www.viacaocometa.com.br')
  cy.get('#header-login-button').click()
  cy.get('#input-login').type(email)
  cy.get('#input-password').type(password, { log: false })
  cy.get('#button-login').click()
  cy.get('.logged-message').should('contain', 'Olá')
})

Cypress.Commands.add('selecionarDataIda', (range = 1) => {
  cy.get('td[data-handler="selectDay"] a').then(($days) => {
    const proximosDias = $days.slice(0, range);
    const randomIndex = Math.floor(Math.random() * proximosDias.length);
    cy.wrap(proximosDias[randomIndex]).click({ force: true });
  });
});

Cypress.Commands.add('selecionarDataVolta', (range = 5) => {
  cy.get('td[data-handler="selectDay"] a').then(($days) => {
    const proximosDias = $days.slice(1, range);
    const randomIndex = Math.floor(Math.random() * proximosDias.length);
    cy.wrap(proximosDias[randomIndex]).click({ force: true });
  });
});



Cypress.Commands.add('selecionarCidadeAleatoria', (campo) => {
  // Define o ID do campo baseado no parâmetro 'origem' ou 'destino'
  const selector = campo === 'origem' ? '#input-departure' : '#input-destination'

  // 1. Abre o campo desejado
  cy.get(selector).click()

  // 2. Localiza as opções no dropdown (usando os seletores do seu HTML)
  cy.get('.ui-autocomplete .ui-menu-item .location-title')
    .filter(':not(:contains("Usar minha localização"))') // Ignora o item de GPS
    .then(($options) => {
      // 3. Lógica de sorteio que você criou
      const randomIndex = Math.floor(Math.random() * $options.length)
      const cidadeEscolhida = $options[randomIndex].innerText

      cy.log(`Sorteado para ${campo}: ${cidadeEscolhida}`)

      // 4. Seleciona a opção sorteada
      cy.wrap($options[randomIndex]).click()
    })
})

Cypress.Commands.add('selecionarAssentoAleatorio', () => {
  // 1. Buscamos a lista de IDs disponíveis
  cy.get('button.outer-seat[id^="seat-"]:not(:has(.occupied-seat))', { timeout: 15000 })
    .should('be.visible')
    .then(($seats) => {
      // Extraímos apenas a string do ID
      const ids = $seats.map((i, el) => el.id).get();
      const randomId = ids[Math.floor(Math.random() * ids.length)];

      // Criamos um apelido (alias) para o ID sorteado para usar fora do .then()
      cy.wrap(randomId).as('idSorteado');
    });
  // 2. AÇÃO ISOLADA (Fora do .then anterior)
  // Isso garante que o Cypress recupere o elemento do DOM zero no momento do clique
  cy.get('@idSorteado').then((id) => {
    cy.get(`#${id}`)
      .scrollIntoView()
      .should('be.visible')
      .click();
  });
  // 3. VALIDAÇÃO FINAL
  cy.get('#btn-proceed', { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled');
});

Cypress.Commands.add('selecionarDoisAssentosAleatorios', () => {
  // 1. Busca os assentos disponíveis
  cy.get('button.outer-seat[id^="seat-"]:not(:has(.occupied-seat))', { timeout: 15000 })
    .should('be.visible')
    .then(($seats) => {
      const ids = $seats.map((i, el) => el.id).get();
      if (ids.length < 2) throw new Error('Assentos insuficientes.');

      const firstIndex = Math.floor(Math.random() * ids.length);
      let secondIndex;
      do {
        secondIndex = Math.floor(Math.random() * ids.length);
      } while (secondIndex === firstIndex);

      // Guardamos apenas os IDs como texto (alias)
      cy.wrap(ids[firstIndex]).as('id1');
      cy.wrap(ids[secondIndex]).as('id2');
    });
    
  // 2. CLIQUE NO PRIMEIRO ASSENTO
  cy.get('@id1').then((id1) => {
    cy.get(`#${id1}`).scrollIntoView().click();
  });

  // 3. ESTABILIZAÇÃO (O pulo do gato)
  // Esperamos o site terminar as requisições que causam o re-render
  cy.wait(2000);

  // 4. CLIQUE NO SEGUNDO ASSENTO
  // Fazemos um NOVO 'get' no ID para garantir que pegamos o elemento após o re-render
  cy.get('@id2').then((id2) => {
    cy.get(`#${id2}`)
      .should('exist') // Garante que o elemento existe no novo DOM
      .scrollIntoView()
      .click();
  });

  // 5. FINALIZAÇÃO
  cy.get('#btn-proceed', { timeout: 15000 })
    .should('be.visible')
    .and('not.be.disabled');
});

Cypress.Commands.add('selecionarPassagemAleatoria', () => {
  // 1. Buscamos os botões de compra que estão dentro de containers disponíveis (.available)
  // Isso exclui automaticamente qualquer botão que esteja na div .unavailable (esgotados)
  cy.get('.available button[data-js="buy-ticket"]:not([disabled])', { timeout: 20000 })
    .should('be.visible')
    .then(($buttons) => {
      const total = $buttons.length;

      if (total === 0) {
        throw new Error('Nenhuma passagem disponível encontrada!');
      }

      // 2. Sorteia o índice
      const randomIndex = Math.floor(Math.random() * total);

      // 3. Seleção Robusta: Buscamos o botão novamente pelo índice para evitar o erro de "disappeared"
      cy.get('.available button[data-js="buy-ticket"]:not([disabled])', { timeout: 3000 })
        .eq(randomIndex)
        .scrollIntoView()
        .click({ force: true });

      cy.log(`Sucesso! Selecionada a opção ${randomIndex + 1} de ${total} passagens disponíveis.`);
    });
});

Cypress.Commands.add('selecionarPassagemMelhorPreco', () => {
  // 1. Localizamos o selo de "Melhor preço do dia"
  cy.get('.cheaper-price.active', { timeout: 20000 })
    .should('be.visible')
    .parents('.available') // Sobe até o container da passagem
    .find('button[data-js="buy-ticket"]:not([disabled])', { timeout: 3000 }) // Busca o botão dentro desse container
    .first()
    // .scrollIntoView()
    .click({ force: true });

  cy.log('Passagem com o melhor preço do dia selecionada!');
});

Cypress.Commands.add('aceitarTermosSeExistirem', () => {
  // Aumentamos a estabilidade verificando o body
  cy.get('body').then(($body) => {
    // 1. Verificamos se o elemento existe no DOM usando jQuery puro
    const botao = $body.find('.button-agree');

    if (botao.length > 0) {
      cy.log('Modal detectado. Tentando fechar...');

      // 2. Usamos o próprio objeto do jQuery para clicar
      // Isso evita que o cy.get() dispare o AssertionError se o elemento sumir no meio do caminho
      cy.wrap(botao)
        .click({ force: true });

      cy.log('Modal de confirmação aceito.');
    } else {
      // Se não encontrar, o log aparece e o teste segue em milissegundos
      cy.log('Modal de confirmação não encontrado. Seguindo...');
    }
  });
});