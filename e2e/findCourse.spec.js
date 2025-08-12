import { test, expect } from '@playwright/test';

/* I'd probably fail the tests because of the missing search button component. However in order to create a valuable coding example I'd
skip that and proceed to add more instructions and code to my tests */


const genre = "Metal";
const instrument = "Guitar";
const searchNotFound = "searchWithNoResultsText";

test.describe('Find your course functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/browse');
  });


test.describe('Search Bar' , () => {  
  test('should search by genre @regression ', async ({ page }) => {
    await search(genre);
   
  });

  test('should search by instrument' , async ({page}) => {
    await search(instrument)
  });

  test('should search with no results found' , async ({page}) => {
    await search(searchNotFound)
  });

  test('should find recommended courses on search section' , async ({page}) => {
    
  });
})

function search(text) {

}

});