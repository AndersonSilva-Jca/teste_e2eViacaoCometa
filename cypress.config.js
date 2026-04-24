const { defineConfig } = require("cypress");
require('dotenv').config();
module.exports = defineConfig({
  // projectId: "yc5eka",
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Relatório de Testes - Viacao Cometa',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  },
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    login: process.env.LOGIN,
    senha: process.env.SENHA,
    mailUsername: process.env.MAIL_USERNAME,
    mailPassword: process.env.MAIL_PASSWORD
  },

  //npx cypress run --spec "cypress/e2e/00_smoke/**/*"

  e2e: {
    baseUrl: 'https://www.viacaocometa.com.br',
    scrollBehavior: 'nearest', // Evita que o Cypress role a página automaticamente durante os testes
    video: false, // Importante para ver o que aconteceu na falha no CI
    screenshotOnRunFailure: true,
    // scrollBehavior: true, // Evita que o Cypress role a página automaticamente durante os testes
    defaultCommandTimeout: 120000, // Aumenta o tempo padrão de espera por elementos
    pageLoadTimeout: 120000, // Espera até 120s para a página carregar totalmente
    requestTimeout: 15000,  // Espera até 15s por respostas de APIs (cy.request)
    responseTimeout: 15000, // Espera até 15s por respostas de interceptações
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push('--ignore-certificate-errors');
        }
        return launchOptions;
      });
    },
    // experimentalRunAllSpecs: true, 
    // testIsolation: false, // Isso mantém a página carregada entre os 'it's
    allowCypressEnv: false,
    trashAssetsBeforeRuns: true, // Evita deletar vídeos e screenshots antigos, útil para análise pós-falha
  },
});
