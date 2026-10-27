const { test, expect } = require('@playwright/test');
const { text } = require('node:stream/consumers');


test('Learning', async ({ browser }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const context = await browser.newcontext();
    const page = await context.newpage();
});

test('Child window handling', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*= 'documents-request']");


    const [newPage] = await Promise.all([
        context.waitForEvent('page'),//listen to any new page pending, rejected, fullfilled
        documentLink.click(), //new page opening here
    ])
    text = await newPage.locator(".red").textContent();
    console.log(text);

});



test('Ecommerce E2E', async ({ page }) => {
    const products = page.locator('.card-body');
    await page.goto("https://rahulshettyacademy.com/client/auth/login");
    await page.locator('#userEmail').fill('shindek5656@gmail.com');
    await page.locator('#userPassword').fill('Narayan@56');
    await page.locator("[value= 'Login']").click(); 
    const count= await products.count();

});