import { test, expect } from '@playwright/test';

test('playing with assertions', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('http://uitestingplayground.com/textinput');

  // check input is visible
  await page.locator('input#newButtonName').isVisible();

  // select input and fill input
  await page.locator('input#newButtonName').fill('nombre corto');

  // click button
  await page.locator('button#updatingButton').click();
  
  // verify button text
  await expect(page.locator('button#updatingButton')).toContainText('nombre corto');

}); 