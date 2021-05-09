import { getEnv } from 'utils/common';

const Config = {
  dev: {
    baseUrl: getEnv('DEV_BASE_URL'),
  },
  prod: {
    baseUrl: getEnv('PROD_BASE_URL'),
  },
  getEnvVariables(environment = 'development') {
    if (environment === 'production') {
      return this.prod;
    }
    return this.dev;
  },
};

export default Config.getEnvVariables(process.env.NODE_ENV);
