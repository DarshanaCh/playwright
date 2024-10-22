import { Before, After ,AfterAll, BeforeAll} from '@cucumber/cucumber';
import { chromium, Page, Browser, expect, BrowserContext } from "@playwright/test";
import { loginPage } from '../../pages/loginPage';
import { betplacePage } from '../../pages/betplacePage';

let browser: Browser;
let page: Page;
let LoginPage: loginPage;
let BetplacePage: betplacePage;

 Before({timeout: 10000},async function() {
    browser = await chromium.launch({ headless: false });
    const context: BrowserContext = await browser.newContext({
      permissions: ['geolocation'], // Automatically grant geolocation permission
    });
  
    page = await context.newPage();
    await context.setGeolocation({ latitude: 51.2538, longitude: 85.3232 });
    await page.goto("https://int08.sports.ferrara.ca/en-ca");
  });


//  After({ timeout: 50000 },async function() {
//   if (this.page) {
//     await this.page.close();  // Close the current page
// }
//  if (this.browser) {
//      await this.browser.close();  // Close the browser instance
// }
//  });


export{page}