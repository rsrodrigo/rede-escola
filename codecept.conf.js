const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// Define se o teste deve rodar em modo headless ou não
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './e2e/**/*.spec.js',
  output: './output',
  
  // CONFIGURAÇÃO DO WEBDRIVER PARA COMUNICAÇÃO COM SERVIDOR SELENIUM
  helpers: {
    WebDriver: {
      url: 'http://localhost:8000',   // Url base para o teste
      browser: 'chrome',              // Navegador que será usado para o teste
      host: '192.168.0.113',          // Servidor selenium-webdriver
      port: 4444,                     // Porta           "
      restart: false,                 // Não reiniciar ao executar cada cenário
      windowSize: '1920x1680',        // Tamanho da tela
      desiredCapabilities: {          // Recursos desejados do navegador chrome
        chromeOptions: {
          args: [ 
            /*"--headless",*/ 
            "--disable-gpu", 
            "--no-sandbox", 
            "--window-position=-5,0",
            "--start-maximized",
            "--auto-open-devtools-for-tabs",
          ]
        }
      }
    },
    Appium: {
      app: 'C:\\QA\\portal-mobile\\automacao-appium\\apk\\Portal-debug.apk',
      host: '127.0.0.1',
      port: 4723,
      platform: "Android",
      desiredCapabilities: {
        appPackage: "oprj.pmerj.rj.gov.br",
        appActivity: "MainActivity",
        deviceName: "POCO X3 Pro",
        platformVersion: "13.0",
        automationName:'UiAutomator2',
        autoGrantPermissions: true,    // concede permissões automaticamente sem precisar confirmá-las.
        newCommandTimeout: 60          // espera 60s o cliente enviar comandos. Após isso, termina a sessão.
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'automação-portal-web',
}