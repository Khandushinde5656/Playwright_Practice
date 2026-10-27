const { test, expect } = require('@playwright/test');


test.only('playwright test', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const productName = 'ZARA COAT 3';
    const products = page.locator('.card-body');
    const userName = page.locator('#userEmail');

    await userName.fill('Khandu.shinde@gmail.com');
    await page.locator('#userPassword').fill('Narayan@56');
    await page.locator('#login').click();
    await page.locator('.card-body b').first().waitFor(); -//waitfor function only works if locator returns only one element thatswhy we use first() function
    //console.log(await page.locator('.card-body b').allTextContents());
    //select zara coat 3

     await page.locator(".card-body").filter({hasText : "ZARA COAT 3"}).getByRole("button", {name: 'Add to cart'}).click();
     await page.getByRole("listitem").getByRole('button', {name : 'Cart'}).click();


     await page.locator("div li").first().waitFor();
     await expect (page.getByText("ZARA COAT 3")).toBeVisible();
     await page.getByRole("button", {name: 'Checkout'}).click();
     await page.getByPlaceholder("Select Country").pressSequentially("ind");
     await page.getByRole("button", {name : 'India'}).nth(1).click();
     await page.getByText('PLACE ORDER').click();

      await expect (page.getByText("THANKYOU FOR THE ORDER.")).toBeVisible();

     //await page.pause();





});










