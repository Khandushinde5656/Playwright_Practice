const {test,expect} = require('@playwright/test');


test ("Popup Validation", async ({page}) =>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
// await page.goto("http://google.com");
// await page.goBack();
// await page.goForward();

await expect( page.locator('#displayed-text')).toBeVisible();// checking the hidden element.
await page.locator('#hide-textbox').click();
await expect( page.locator('#displayed-text')).toBeHidden(); // checking that element is hidden.
await page.pause();
// how to handle popup/dialog
page.on('dialog',dialog => dialog.accept());  // it will acceopt the popup/dialog
await page.locator("#confirmbtn").click();  

await page.locator("#mousehover").hover(); // to hover on the menu













});