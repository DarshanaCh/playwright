import { Given, When, Then} from '@cucumber/cucumber';
import { chromium, Page, Browser, expect, BrowserContext } from "@playwright/test";
import {loginPage} from '../pages/loginPage';
import { betplacePage } from '../pages/betplacePage';
import { page } from '../features/hooks/hook';


let LoginPage: loginPage;
let BetplacePage: betplacePage;


Given('User select price checkbox', async function() {
 
  BetplacePage =new betplacePage(page);
  await BetplacePage.autoacceptcheckbox();
  await BetplacePage.placeConfirmBet();

});
  
