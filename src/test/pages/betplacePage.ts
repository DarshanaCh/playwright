import type { Page } from  '@playwright/test';
export class betplacePage{
    readonly page: Page;

    private usernameInput='#username';
    private passwordInput='#password';
    private loginButton ='//button[@role="button"]';
    private rememberUser='#rememberUser';
    private isEligible ='#isEligible';
    private account ='#display account information';
    private myBalance ='My Balance:';
    private loginError= '#loginError';
    private accountLink='#accountlink';


    constructor(page:Page){
        this.page=page
    }

    //private Elemennts

    async betplaceselect(){
   
        const sportselector ='#fdjgs-widget-navigation > div > ul > li:nth-child(1)';
        const countryselector='#fdjgs-widget-navigation > div > ul > ul > li';
        const tournamentselector='#fdjgs-widget-navigation > div > ul > ul > ul > li';

        await this.page.waitForSelector(sportselector);
        await this.page.click(sportselector);
        await this.page.waitForSelector(countryselector);
        await this.page.click(countryselector);
        await this.page.waitForSelector(tournamentselector);
        await this.page.click(tournamentselector);
    }
    async selectGame()
    {
       
    }
    async selectbet()
    {
        const eventselector='#us-coupon-inPlay-panel > section > div:nth-child(2) > div.fdjgs-us-coupon-activity-event-details > a';
        
        await this.page.waitForSelector(eventselector);
        await this.page.click(eventselector);
       
    }
    async placeBetprice()
     {
        const betselector='#us-coupon-inPlay-panel > section > div:nth-child(2) > div.fdjgs-us-coupon-activity-markets-container > div > div:nth-child(2) > ul > li:nth-child(1)';
        
        const betpriceselector='#betslip-tab > div > div:nth-child(2) > ul > li > div.stake-and-winnings-holder > div.single.stake-container > input';
        const cookieselector='#__next > div.spa-container > div.cc-window.cc-banner.cc-type-info.cc-theme-block.cc-bottom.cc-color-override--610648704';
        
        await this.page.waitForSelector(betselector);
        await this.page.click(betselector);
        await this.page.click(betpriceselector);
        await this.page.fill(betpriceselector,'1');
        await this.page.getByLabel('dismiss cookie message').click();
     }
    async autoacceptcheckbox()
    {  
        const acceptCheckbox='#fdjgs-accept-price-change > label';
        await this.page.click(acceptCheckbox);
    }

    async placeConfirmBet()
    {
        await this.page.getByRole('button', { name: 'Place bet' }).click();
        await this.page.getByRole('button', { name: 'Confirm bet' }).click();
        await this.page.getByText('Processing…').click();
        await this.page.getByLabel('Retain selections, cursor').isVisible();
        await this.page.close();              
    }
    async close()
    {
        await this.page.close();
    }

}