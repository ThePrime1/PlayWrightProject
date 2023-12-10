import { test, expect } from '@playwright/test';

test('locators', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");

    //Click on login link

    //await page.locator("id=login2").click();
    await page.click("id=login2");
    //await page.locator("#loginusername").fill("pavanol");
    await page.fill("#loginusername", "pavanol");
    await page.fill("#loginpassword", "test@123");

    //Clicking login button
    await page.click("button[onclick='logIn()']");

    /*Verifying login 
    if logout is visible then test passed
    */
    const logoutLink = await page.locator("#logout2");
    await expect(logoutLink).toBeVisible();
    await page.close();
})