import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser, expect, BrowserContext } from "@playwright/test";
import {searchPage} from '../pages/searchPage';
import { page } from '../features/hooks/hook';

let SearchPage: searchPage;

Given('User select search icon', async function () {

  SearchPage = new searchPage(page);
  await SearchPage.selectSearch();
    
   });
Given('User enter the search text as {string}', async function (string) {
    await SearchPage.typeSearch();
   });
Then('User should see the records', async function () {
    await SearchPage.displayRecords();  
  });

