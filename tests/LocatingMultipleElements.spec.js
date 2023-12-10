import { test, expect } from '@playwright/test';

test('locating multiple elements', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");

    await page.click("id=login2");
    await page.fill("#loginusername", "pavanol");
    await page.fill("#loginpassword", "test@123");

    //Clicking login button
    await page.click("button[onclick='logIn()']");

    /*Verifying login 
    if logout is visible then test passed
    */
    const logoutLink = await page.locator("#logout2");
    await expect(logoutLink).toBeVisible();

    /*
    const links = await page.$$('a');
    for (const link of links) {
        const linkText = await link.textContent();
        console.log(linkText);
    }
    */

    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");
    let productCount = 0;
    for (const product of products) {
        const productName = await product.textContent();
        productCount++;
        console.log("Product name: ", productName, "Number of products: ", productCount);
    }
})