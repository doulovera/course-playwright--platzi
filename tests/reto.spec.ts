/**
 * 1. Abre la tienda virtual
 * 2. Desliza hasta ver los productos
 * 3. Haz click en "View Product" del PRIMER producto ✅
 * 4. Usa el input de cantidad para añadir 3 productos al carrito ✅
 * 5. Haz click en "Añadir al carrito" ✅
 * 6. Verifica que el modal y el text de "Added!" aparece ✅
 * 7. Haz click en el botón "Continue shopping" ✅
 * 8. Verifica que el modal ya no es visible ✅
 */

import { test, expect } from '@playwright/test';

test('reto #1', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  await page.locator('a[href="/product_details/1"]').click();

  // close ad
  if (page.url() === 'https://automationexercise.com/#google_vignette') {
    await page.frameLocator('#aswift_5').frameLocator('internal:attr=[title="Advertisement"i]').getByRole('button', { name: 'Close ad' }).click();
  }

  await page.locator('#quantity').fill('3');

  await page.locator('button:has-text("Add to cart")').click();

  await page.locator('#cartModal').isVisible();
  await page.locator('text=Added!').isVisible();

  await page.locator('button.close-modal').click();

  await expect(page.locator('#cartModal')).not.toBeVisible();

});