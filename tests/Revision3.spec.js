import { test, expect } from '@playwright/test';


test('playwright special locators', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByLabel('Employed').click();
    await page.getByLabel('Gender').selectOption('Female');

    //get by placeholder
    await page.getByPlaceholder('Password').fill('abc1234');
    await page.getByRole("button", { name: 'submit' }).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    //5 seconds is default timeout for the expect assersion --{timeout:10000} step level timeout
    //await expect (page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout: 10_000}); //validation
    
    await page.getByRole("link", { name: 'Shop' }).click();
    await page.locator("app-card").filter({ hasText: "Nokia Edge" }).getByRole("button").click();
});


test('playwright test level timeout', async ({ page }) => {

    //timeout hirarchy 1- it follows global timeout then if you have timeout in test level then it override global and follows test level timeout->if you have timeout in step level then it give priority to step level and follows step level

     test.setTimeout(6000); // it will give the timeout for this whole test to complete
     const SlowExpect = expect.configure({timeout : 9000}); // this is test level timeout for assersion which applied for this perticualr test
     page.setDefaultTimeout(9000); // this timeout only applied for the actions (example-> .click, .fill, .check)

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByLabel('Employed').click();
    await page.getByLabel('Gender').selectOption('Female');

    //get by placeholder
    await page.getByPlaceholder('Password').fill('abc1234');
    await page.getByRole("button", { name: 'submit' }).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    //5 seconds is default timeout for the expect assersion
    await expect (page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible(); //validation
    
    await page.getByRole("link", { name: 'Shop' }).click();
    await SlowExpect (page.locator(".my-4").first()).toHaveText("Shop"); //used here slowexpect
    await page.locator("app-card").filter({ hasText: "Nokia Edge" }).getByRole("button").click();
});