//playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    //baseURL: 'http://google.com/',
    //baseURL: 'https://int07.sports.ferrara.ca/en-ca',
    //browserName: 'chrome',
    headless: false,
   

  },
};
export default config;