import {env} from 'process';
import {Context} from '@crunchyroll/api-client';
const {
  ACCOUNT_AUTH_BASE_URL,
  BASE_URL,
  CMS_API_URL,
  CONTENT_API_URL,
  CR_PLAY_BASE_URL,
  WATCHLIST_BASE_URL,
} = process.env;

const ENV = env['ENV'] || 'PROD';

export const ctx: Context = {
  debug: false,
  tenant: 'cr',
  environment: ENV,
  client: {
    id: 'cr_backend',
    secret: 'cr_backend_secret',
  },
  hosts: {
    [`WATCHLIST_INTERNAL_${ENV.toUpperCase()}_HOST`]: WATCHLIST_BASE_URL as string,
    [`ACCOUNT_AUTH_INTERNAL_${ENV.toUpperCase()}_HOST`]: ACCOUNT_AUTH_BASE_URL as string,
    [`CR_PLAY_SERVICE_INTERNAL_${ENV.toUpperCase()}_HOST`]: CR_PLAY_BASE_URL as string,
    [`CMS_API_INTERNAL_${ENV.toUpperCase()}_HOST`]: CMS_API_URL as string,
    [`CONTENT_API_INTERNAL_${ENV.toUpperCase()}_HOST`]: BASE_URL as string,
    [`PLAYHEADS_INTERNAL_${ENV.toUpperCase()}_HOST`]: CONTENT_API_URL as string,
  },
};
