import { Given, When, Then} from '@cucumber/cucumber';
import { chromium, Page, Browser, expect, BrowserContext } from "@playwright/test";
import {loginPage} from '../pages/loginPage';
import { page } from '../features/hooks/hook';


let LoginPage: loginPage;

Given('User navigates to the practice application', { timeout: 10000 }, async function () {

  //await page.goto("https://int08.sports.ferrara.ca/en-ca");
  LoginPage=new loginPage(page);
  
});
Given('User click on the my account link', async() => {
  
  await LoginPage.selectAccountLink();
   
})
Given('User enter the username as {string}', async (username: string) => {

    await LoginPage.selectusername(username);
})
Given('User enter the password as {string}', async function (password: string){

  await LoginPage.selectpassword(password);
  
}); 

When('User click on the login button',{ timeout: 4000 }, async function(){
  await LoginPage.selectRememberUser();
  await LoginPage.selectisEligible();
  await LoginPage.selectlogin();
});

Then('Login should be success',{ timeout: 15000 },async function () {
  
  await LoginPage.displaymyBalance();
  await LoginPage.close();
 
});

Then('Login should be fail',{timeout: 10000},async function () {
  console.log("seven");
  await expect(page.getByText('The login credentials are incorrect')).toBeVisible();
  await LoginPage.close();
});

Given('User has logged in successfully', () => {
  // Write code here that turns the phrase above into concrete actions
})


