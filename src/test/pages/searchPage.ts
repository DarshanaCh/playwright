import type { Page } from  '@playwright/test';
export class searchPage{
    readonly page: Page;

    private search='#username';
  
    constructor(page:Page){
        this.page=page
    }

    //private Elemennts

    async selectSearch(){
       await this.page.getByRole('link', { name: 'Visit OLG Search' }).click();
      }
    async typeSearch()
    {
        await this.page.getByPlaceholder('Search Competitions, Teams…').click();
        await this.page.getByPlaceholder('Search Competitions, Teams…').fill('test');
    }
    async displayRecords()
    {
        await this.page.locator('#search-results-container').isVisible();
        await this.page.close();
    }
}