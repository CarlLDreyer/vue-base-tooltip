import { test, expect, type Page } from '@playwright/test'

test('custom styling', async ({ page }) => {
  await page.goto('https://carlldreyer.github.io/vue-base-tooltip/examples/custom-styling.html')

  const locator = page.locator('.example__button')
  await locator.hover()

  await page.waitForTimeout(1000)

  await expect(page).toHaveScreenshot()
})

test('placement: auto', async ({ page }) => {
  await page.goto('https://carlldreyer.github.io/vue-base-tooltip/examples/placement.html')

  const locator = page.locator('.example__button')
  await locator.hover()

  await page.waitForTimeout(1000)

  await expect(page).toHaveScreenshot()
})

test('placement: bottom-start', async ({ page }) => {
  await page.goto('https://carlldreyer.github.io/vue-base-tooltip/examples/placement.html')

  await page.getByPlaceholder('Select placement').selectOption('bottom-start')

  const locator = page.locator('.example__button')
  await locator.hover()

  await page.waitForTimeout(1000)

  await expect(page).toHaveScreenshot()
})

test('delay', async ({ page }) => {
  await page.goto('https://carlldreyer.github.io/vue-base-tooltip/examples/delay.html')

  const locator = page.locator('.example__button')
  await locator.hover()

  await page.waitForTimeout(2000)

  await expect(page).toHaveScreenshot()
})

test('offset', async ({ page }) => {
  await page.goto('https://carlldreyer.github.io/vue-base-tooltip/examples/offset.html')

  const locator = page.locator('.example__button')
  await locator.hover()

  await page.waitForTimeout(1000)

  await expect(page).toHaveScreenshot()
})
