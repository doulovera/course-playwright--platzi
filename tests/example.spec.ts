import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://platzi.com/');
  await page.getByPlaceholder('¿Qué quieres aprender?').click();
  await page.getByPlaceholder('¿Qué quieres aprender?').fill('playwright');
  await page.getByRole('link', { name: 'Badge de Curso de Automatización de Test con Playwright Curso de Automatización de Test con Playwright' }).click();
  await page.getByRole('link', { name: 'Cursos de Lupe' }).click();
});