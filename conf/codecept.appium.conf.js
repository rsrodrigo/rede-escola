const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  /**
   * Permite Executar um único arquivo passando na linha de comando o seguinte:
   * --profile <arquivo-teste>
   * 
   * OU executar uma lista de testes seguidos:
   * -- profile [<caminho-teste-1>, <caminho-teste-2>, etc]
   * 
   * Se não receber --profile, vai ececutar todos os testes dentro da pasta '../e2e/mobile/'
   */
  tests: process.env.profile || '../e2e/mobile/**/*.spec.js',
  output: '../output',
  helpers: {
    Appium: {
      app: 'C:\\QA\\rede-escola\\apk\\Escola-debug.apk',
      host: '127.0.0.1',
      port: 4723,
      platform: "Android",
      desiredCapabilities: {
        deviceName: "POCO X3 Pro",
        platformVersion: "13.0",
        automationName:'UiAutomator2',
        autoGrantPermissions: true,    // concede permissões automaticamente sem precisar confirmá-las.
        newCommandTimeout: 60          // espera 60s o cliente enviar comandos. Após isso, termina a sessão.
      }
    }
  },
  include: {
    I: '../steps_file.js'
  },
  name: 'automacao-appium-rede-escola'
}