import { test, expect } from '@playwright/test';

test.describe('Find your course spec', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/browse');
  });

  test('Search by genre ', async ({ page }) => {
   
  });

  test('Search by instrument' , async ({page}) => {

  })

  test('Search by style' , async ({page}) => {
    
  })
  
});