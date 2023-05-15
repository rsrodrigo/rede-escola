const { WAIT_TIMEOUT } = require('../constants/constantes');

Feature('Login');

Scenario('Fazer Login', async ({ I }) => {
    I.runOnAndroid( () => {
        I.seeAppIsInstalled("com.redeescola.pmerj.rj.gov.br");
        I.waitForVisible('android.widget.Image', WAIT_TIMEOUT)
        I.fillField('', 'botafogo.silva.02@hotmail.com')
        I.fillField('', 'Dsi305@')
        I.click('Entrar')
        I.wait(5)
    })
})