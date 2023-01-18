import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('http://uitestingplayground.com/');

  /* get by id */
  const title = await page.locator('#title');
  console.log('The title is: ', await title.textContent());

  /* get by class */
  await page.locator('.alert');

  /* get by tag and click */
  // ❌ await page.locator('a').click();
  // throws error because there are many anchors in the page and the Strict mode won't allow it
  await page.locator('a').first().click();
  await page.locator('a.navbar-brand').click();


  // await page.locator('a.nav-link:has-text("Resources")').click();
  // await page.locator('a.nav-link:has-text("Home")').click();

  // await page.locator('a:has-text("Click")').click();

  // await page.locator('button:has-text("Button That Ignores DOM Click Event")').click();
}); 