import { test, expect } from '@playwright/test';

test('counter works', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const counter = page.getByTestId('counter-value').first();

  await expect(counter).toHaveText('Counter: 0');

  await page.getByText('Increment').first().click();
  await expect(counter).toHaveText('Counter: 1');

  await page.getByText('Decrement').first().click();
  await expect(counter).toHaveText('Counter: 0');

  await page.getByText('Reset').first().click();
  await expect(counter).toHaveText('Counter: 0');
});
