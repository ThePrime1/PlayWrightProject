import { test, expect } from '@playwright/test';

test("Home Page", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");

    const pageTitle = page.title();
    console.log("Page title is: ", pageTitle);

    await expect(page).toHaveTitle("STORE");

    const pageUrl = page.url();
    console.log("Page url is:", pageUrl);
    await expect(page).toHaveURL("https://www.demoblaze.com/");

    await page.close();
})