const config = {
  host: '127.0.0.1',
  port: '4444',
  path: '/wd/hub',
  specs: [
    './features/**/*.feature'
  ],
  exclude: [],
  maxInstances: 1,
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  deprecationWarnings: true,
  screenshotPath: './errorShots/',
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--headless',
        '--disable-gpu',
        '--disable-bundled-ppapi-flash',
        '--disable-extensions',
        '--no-sandbox',
        '--disable-background-networking',
        '--disable-sync',
        '--disable-translate',
        '--mute-audio',
        '--no-first-run',
        '--safebrowsing-disable-auto-update',
        '--ignore-certificate-errors',
        '--ignore-ssl-errors',
        '--ignore-certificate-errors-spki-list'
      ]
    }
  }],
  waitforTimeout: 20000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  framework: 'cucumber',
  reporters: ['cucumber'],
  cucumberOpts: {
    require: ['./src/step_definitions/**/*.steps.js'],
    tagExpression: '',
    backtrace: false,
    timeout: 40000,
    compiler: [],
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    ignoreUndefinedDefinitions: false
  },
  beforeScenario: function () {
    browser.reload()
  }
}

module.exports = {config}