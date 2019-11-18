import { version } from '../../package.json';

// auto-detect correct environment
const domainArr = document.location.hostname.split('.');
let ENVIRONMENT = 'dev';

if (domainArr[0] === 'www') {
  // ENVIRONMENT = 'production';
} else if (domainArr[0] === 'localhost' || domainArr[0] === '192') {
  // ENVIRONMENT = 'local';
} else if (domainArr[0] === 'dev') {
  // ENVIRONMENT = 'dev';
}

const config = {
  ENVIRONMENT: ENVIRONMENT, // local, dev, staging, production
  API_TIMEOUT: 30000,
  VERSION: version,
  API_VERSION: '1',
  LANGUAGE: 'en',
  EMAIL_REGEX: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})]?$)/i,
  COMPANY_NAME: '',
  COMPANY_PHONE: '',
  ENABLE_SERVICE_WORKER: false
};

const makeConfig = (newConfig) => {
  const resConfig = Object.assign({}, config, newConfig);

  // overrides
  if (resConfig.ENVIRONMENT === 'production') {
    resConfig.API_URL = 'https://api.pswisa40/' + resConfig.API_VERSION + '/';
    resConfig.WS_API_URL = 'wss://ws.pswisa40/' + resConfig.NBS_API_VERSION + '/';
  } else if (resConfig.ENVIRONMENT === 'dev') {
    resConfig.API_URL = 'http://api.pswisa40/' + resConfig.API_VERSION + '/';
    resConfig.WS_API_URL = 'wss://api.pswisa40/' + resConfig.NBS_API_VERSION + '/';
  }
  return resConfig;
};

export { makeConfig };
