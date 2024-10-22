import { Given, When, Then} from '@cucumber/cucumber';
import { chromium, Page, Browser, expect, BrowserContext } from "@playwright/test";
import {loginPage} from '../pages/loginPage';
import { betplacePage } from '../pages/betplacePage';
import { page } from '../features/hooks/hook';



let LoginPage: loginPage;
let BetplacePage: betplacePage;

Given('User username as {string} has logged in successfully', async function (string) {

  });
Given('User select {string} as sport',{timeout: 20000}, async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await page.setViewportSize({ width: 1536 , height:720 })   
    BetplacePage =new betplacePage(page);
    await BetplacePage.betplaceselect();
  });

Given('User select {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await BetplacePage.selectGame();
  });

When('User click on bet price', async function () {
    // Write code here that turns the phrase above into concrete actions
    await BetplacePage.selectbet();
  });

Then('User should see the bets in betslip', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

Then('User enter price for the bets', async function () {
    
   await  BetplacePage.placeBetprice();
  });
Then('User should be able to click on place bet',{timeout: 10000}, async function () {
   
  await BetplacePage.placeConfirmBet();
   
  });

Then('User select the sport', async () => {
  
  await page.setViewportSize({ width: 1536 , height:720 })   
  BetplacePage =new betplacePage(page);
  await BetplacePage.betplaceselect();
})
