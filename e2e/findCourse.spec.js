import { test, expect } from '@playwright/test';

/* I'd probably fail the tests because of the missing search button component. However in order to create a valuable coding example I'd
skip that and proceed to add more instructions and code to my tests */


/* Adding consts. In case the content is modified I'll change their values here, 
instead of having repeated variables on each test, or having harcoded values. Alternatively it's possible to add these consts to a
.json file or config file*/

const PLACEHOLDER_SEARCH_BAR = "Search by genre, instrument, or style...";
const RECOMMENDED_COURSE_LABEL = "Not suere where to start? Click here and we'll recommend the perfect course for you!";

const GENRE = "Metal";
const INSTRUMENT = "Guitar";
const SEARCH_NOT_FOUND = "searchWithNoResultsText";

const GENRE_COURSE_NAME = "Metalmorphosis";
const INSTRUMENT_COURSE_NAME = "Guitar Zen: CAGED";


test.describe('Find your course functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/browse');
  });


test.describe('Search Bar' , () => {  
  test('should search by genre @regression ', async ({ page }) => {
    await search(GENRE , page);
    await assertResultExists(GENRE_COURSE_NAME , page);
  });

  test('should search by instrument' , async ({page}) => {
    await search(INSTRUMENT, page);
    await assertResultExists(INSTRUMENT_COURSE_NAME , page);
  });

  test('should search with no results found' , async ({page}) => {
    await search(SEARCH_NOT_FOUND,page)
    const resultsList = page.locator('.aa-List').first();
    // I expect to not see the list
    await expect(resultsList).not.toBeVisible();
  });

  test('should find recommended courses on search section' , async ({page}) => {
    await page.getByText(RECOMMENDED_COURSE_LABEL).getByRole("link").click();
    // I intentionally fail this test because the component is missing. Otherwise I would assert that I am redirected to another page
    await expect(1).toBe(0);
  });
})

// I would consider to create commands if the search is used on other pages. For now I'll keep it here as functions for this section
async function search(text, page) {
  // Index 1 because there is another search bar on the top of the page
  await page.getByPlaceholder(PLACEHOLDER_SEARCH_BAR).nth(1).fill(text);
}

async function assertResultExists(expectedResult, page) {
   const resultsList = page.locator('.aa-List').first();
   await expect(resultsList).toBeVisible();
   const listElement = resultsList.getByText(expectedResult);
   await expect(listElement).toBeVisible() 
}

});