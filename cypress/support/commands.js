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

Cypress.Commands.add('selecionarDataIda', (range = 2) => {
  cy.get('td[data-handler="selectDay"] a').then(($days) => {
    const proximosDias = $days.slice(0, range);
    const randomIndex = Math.floor(Math.random() * proximosDias.length);
    cy.wrap(proximosDias[randomIndex]).click({ force: true });
  });
});

Cypress.Commands.add('selecionarDataVolta', (range = 6) => {
  cy.get('td[data-handler="selectDay"] a').then(($days) => {
    const proximosDias = $days.slice(0, range);
    const randomIndex = Math.floor(Math.random() * proximosDias.length);
    cy.wrap(proximosDias[randomIndex]).click({ force: true });
  });
});

Cypress.Commands.add('selecionarCidadeAleatoria', (campo) => {
  // Define o ID do campo baseado no parâmetro 'origem' ou 'destino'
  const selector = campo === 'origem' ? '#input-departure' : '#input-destination'

  // 1. Abre o campo desejado
  cy.get(selector).click({force: true})

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
      .click({ force: true });
  });
  // 3. VALIDAÇÃO FINAL
  cy.get('#btn-proceed', { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled');
});
Cypress.Commands.add('selecionarAssentoAleatorio1', () => {
  const tentarSelecionar = () => {
    // 1. Busca assentos que não estão ocupados visualmente
    cy.get('button.outer-seat[id^="seat-"]:not(:has(.occupied-seat))', { timeout: 15000 })
      .should('be.visible')
      .then(($seats) => {
        const ids = $seats.toArray().map(el => el.id);
        const randomId = ids[Math.floor(Math.random() * ids.length)];

        cy.log(`Tentando assento: ${randomId}`);

        // 2. Tenta clicar no assento sorteado
        cy.get(`#${randomId}`).scrollIntoView().click({ force: true });

        // 3. Checa se o alerta de erro apareceu
        cy.wait(1000); // Pequena espera para o alerta processar
        cy.get('body').then(($body) => {
          if ($body.find('#alert-overlay[style*="display: block"]').length > 0) {
            cy.log('Assento indisponível no servidor! Tentando outro...');
            
            // Clica no botão "Fechar" do alerta (baseado no seu HTML)
            cy.get('#close-alert-overlay').contains('Fechar').click();
            
            // Recursividade: Chama a função novamente para tentar outro assento
            tentarSelecionar();
          } else {
            cy.log('Assento selecionado com sucesso.');
          }
        });
      });
  };

  // Inicia a tentativa
  tentarSelecionar();

  // 4. VALIDAÇÃO FINAL
  cy.get('#btn-proceed', { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled');
});
Cypress.Commands.add('selecionarAssentoAleatorio2', () => {
  const tentarSelecionar = () => {
    // 1. Busca assentos que não estão ocupados visualmente
    cy.get('button.outer-seat[id^="seat-"]:not(:has(.occupied-seat))', { timeout: 15000 })
      .should('be.visible')
      .then(($seats) => {
        const ids = $seats.toArray().map(el => el.id);
        const randomId = ids[Math.floor(Math.random() * ids.length)];

        cy.log(`Tentando assento: ${randomId}`);

        // 2. Tenta clicar no assento sorteado
        cy.get(`#${randomId}`).scrollIntoView().click({ force: true });

        // 3. Checa se o alerta de erro apareceu
        cy.wait(1000); // Pequena espera para o alerta processar
        cy.get('body').then(($body) => {
          if ($body.find('#alert-overlay[style*="display: block"]').length > 0) {
            cy.log('Assento indisponível no servidor! Tentando outro...');
            
            // Clica no botão "Fechar" do alerta (baseado no seu HTML)
            cy.get('#close-alert-overlay').contains('Fechar').click();
            
            // Recursividade: Chama a função novamente para tentar outro assento
            tentarSelecionar();
          } else {
            cy.log('Assento selecionado com sucesso.');
          }
        });
      });
  };

  // Inicia a tentativa
  tentarSelecionar();

  // 4. VALIDAÇÃO FINAL
  cy.get('#btn-proceed', { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled');
});
Cypress.Commands.add('selecionarDoisAssentosAleatorios', () => {
  const selecionar = () => {
    // 1. Busca assentos disponíveis (frescos)
    cy.get('button.outer-seat[id^="seat-"]:not(:has(.occupied-seat))', { timeout: 15000 })
      .should('be.visible')
      .then(($seats) => {
        const ids = $seats.map((i, el) => el.id).get();
        if (ids.length < 2) throw new Error('Assentos insuficientes.');

        // Sorteia dois IDs
        const firstId = ids[Math.floor(Math.random() * ids.length)];
        let secondId;
        do {
          secondId = ids[Math.floor(Math.random() * ids.length)];
        } while (secondId === firstId);

        // 2. Tenta selecionar o primeiro
        cy.get(`#${firstId}`).scrollIntoView().click({ force: true });
        cy.wait(1000); // Aguarda processamento do servidor

        // 3. Tenta selecionar o segundo
        cy.get(`#${secondId}`).scrollIntoView().click({ force: true });
        cy.wait(1500);

        // 4. VERIFICAÇÃO DE ERRO (O pulo do gato)
        // Se a mensagem de erro do seu print aparecer, reinicia o processo
        cy.get('body').then(($body) => {
          if ($body.find('[data-js="close-alert-overlay"]').length > 0 && $body.find('[data-js="close-alert-overlay"]').is(':visible')) {
            cy.log('⚠️ Assento indisponível detectado! Tentando outro...');
            
            // Clica no botão "Fechar" do seu print
            cy.get('[data-js="close-alert-overlay"]').click();
            
            // Espera o modal sumir e tenta de novo (Recursão)
            cy.wait(1000);
            selecionar(); 
          } else {
            // 5. Se não deu erro, finaliza
            cy.get('#btn-proceed', { timeout: 15000 })
              .should('be.visible')
              .and('not.be.disabled')
              .click();
          }
        });
      });
  };

  selecionar(); // Inicia a execução
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
    .scrollIntoView()
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

Cypress.Commands.add('selecionarPassagemAleatoria1', () => {
  // 1. Buscamos todos os containers de oferta que estão disponíveis (.available)
  // e que NÃO contenham o texto "CAMA" no campo de classe/tipo de poltrona
  cy.get('li[data-js^="offer-element-"]:has(.available)', { timeout: 20000 })
    .should('be.visible')
    .then(($ofertas) => {
      // Filtramos as ofertas para garantir que o texto "CAMA" não esteja presente
      const ofertasSemCama = $ofertas.filter((i, el) => {
        const textoClasse = Cypress.$(el).find('[data-js^="classtype_"]').text().toUpperCase();
        return !textoClasse.includes('CAMA');
      });

      const total = ofertasSemCama.length;

      if (total === 0) {
        throw new Error('Nenhuma passagem (que não seja CAMA) disponível encontrada!');
      }

      // 2. Sorteia o índice entre as opções válidas
      const randomIndex = Math.floor(Math.random() * total);
      const escolha = ofertasSemCama[randomIndex];

      // 3. Seleção: Clica no botão de compra dentro da oferta sorteada
      cy.wrap(escolha)
        .find('button[data-js="buy-ticket"]:not([disabled])')
        .scrollIntoView()
        .click({ force: true });

      cy.log(`Sucesso! Selecionada uma opção entre ${total} passagens disponíveis (Excluindo CAMA).`);
    });
});


Cypress.Commands.add('selecionarPassagemAleatoria3', (tipoParaIgnorar) => {
  const seletorCard = 'li[data-js^="offer-element"]';
  
  cy.get(seletorCard, { timeout: 20000 })
    .should('be.visible')
    .then(($offers) => {
      const $filtered = $offers.filter((i, el) => {
        const container = Cypress.$(el);
        const textoTipoBus = container.find('.bus-type-section').text();
        const temBotaoValido = container.find('button[data-js="buy-ticket"]:not([disabled])').length > 0;
        return !textoTipoBus.includes(tipoParaIgnorar) && temBotaoValido;
      });

      const total = $filtered.length;
      if (total === 0) {
        throw new Error(`Nenhuma passagem disponível encontrada (exceto as do tipo ${tipoParaIgnorar})`);
      }

      const randomIndex = Math.floor(Math.random() * total);

      // 1. Primeiro clique para tentar comprar
      cy.wrap($filtered)
        .eq(randomIndex)
        .find('button[data-js="buy-ticket"]')
        .scrollIntoView()
        .click({ force: true });

      // 2. Se aparecer o popup de "concordar", clica nele
      // O .if() garante que se não aparecer, o teste segue em frente imediatamente
      cy.get('.button-agree', { timeout: 2000 }).if().click();

      /* NOTA: Se o popup ".button-agree" for daqueles que bloqueia a tela 
         e impede a compra de prosseguir, você pode precisar clicar no botão 
         de comprar NOVAMENTE após fechar o popup. Se for esse o caso, 
         o código abaixo faz sentido:
      */
      cy.get('.button-agree').if().then(() => {
         cy.log('Popup detectado, clicando novamente no botão de compra...');
         cy.wrap($filtered)
           .eq(randomIndex)
           .find('button[data-js="buy-ticket"]')
           .click({ force: true });
      });

      cy.log(`✅ Comando Finalizado. Opção ${randomIndex + 1} tratada.`);
    });
});


// IDA
Cypress.Commands.add('selecionarPassagemIda', () => {
  const seletorCard = 'li[data-js^="offer-element"]';

  cy.get(seletorCard, { timeout: 20000 }).should('be.visible').then(($offers) => {
    const $filtered = $offers.filter((i, el) => Cypress.$(el).find('button[data-js="buy-ticket"]:not([disabled])').length > 0);
    const $escolhido = $filtered.eq(Math.floor(Math.random() * $filtered.length));
    const $btn = $escolhido.find('button[data-js="buy-ticket"]');

    cy.wrap($btn).scrollIntoView().click({ force: true });

    // AJUSTE AQUI: Adicionado 'visible' para ignorar se estiver display:none
    cy.get('.button-agree', { timeout: 3000 }).if('visible').click().then(() => {
        cy.wrap($btn).click({ force: true });
    });
  });
});

// VOLTA
Cypress.Commands.add('selecionarPassagemVolta', () => {
  cy.contains('ESCOLHER PASSAGENS', { timeout: 20000 }).should('be.visible');
  cy.wait(2000); 

  cy.get('li[data-js^="offer-element"]').should('be.visible').then(($offers) => {
    const $filtered = $offers.filter((i, el) => Cypress.$(el).find('button[data-js="buy-ticket"]:not([disabled])').length > 0);
    const $escolhido = $filtered.eq(Math.floor(Math.random() * $filtered.length));
    const $btn = $escolhido.find('button[data-js="buy-ticket"]');

    cy.wrap($btn).scrollIntoView().click({ force: true });

    // AJUSTE AQUI TAMBÉM: 'visible'
    cy.get('.button-agree', { timeout: 3000 }).if('visible').click().then(() => {
        cy.wrap($btn).click({ force: true });
    });
  });
});