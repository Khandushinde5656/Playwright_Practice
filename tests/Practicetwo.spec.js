const {test, expect} = require('@playwright/test');
const { link } = require('node:fs');


test ('SIGNUP', async ( { page } )=>
{
    await page.goto("https://automationexercise.com/");
    await page.getByRole('link', {name: ' Signup / Login'}).click();
    await page.getByRole('textbox', {name: 'name'}).fill('gtgg');
    await page.locator('form').filter({hasText: 'Signup'}).getByPlaceholder('Email Address').fill('gtgtg@gmail.com');
    await page.getByRole('button', {name: 'Signup'}).click();
    await page.getByRole('radio', {name: 'Mr.'}).check();
    await page.getByRole('textbox', {name: 'password'}).fill('gtrtre');
    await page.locator('#days').selectOption('10');
        // await page.locator('#days').selectOption('02');
//     await page.locator('#months').selectOption('02');
//     await page.locator('#years').selectOption('2006');
    // await page.getByRole('checkbox',{name: 'Sign up for our newsletter!'}).check();
    // await page.getByRole('checkbox',{name: 'Receive special offers from our partners!'}).check();
    // await page.getByRole('textbox', {name: 'First name'}).fill('Aishwwwarrrya1');
    // await page.getByRole('textbox', {name: 'Last name'}).fill('ghaewwrr1');
    // await page.getByRole('textbox', {name: 'Company', exact: true}).fill('LTIMINDTREE');
    // await page.getByRole('textbox', {name: 'Address '}).fill('ADDRESS1');
    // await page.getByRole('textbox', {name: 'Address 2'}).fill('ADDRESS2');
    // await page.locator('#country').selectOption('United States');
    // await page.getByRole('textbox', {name: 'State '}).fill('Maharashtra');
    // await page.getByRole('textbox', {name: 'City '}).fill('MUMBAI');
    // await page.locator('#zipcode').fill('411041');
    // await page.getByRole('textbox', {name: 'Mobile Number '}).fill('9988776655');
    // await page.getByRole('button', { name: 'Create Account' }).click();


 });

   

   




 








test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('polk');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('polk@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByRole('radio', { name: 'Mrs.' }).check();
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('poiuytr');
  await page.locator('#days').selectOption('18');
  await page.locator('#months').selectOption('10');
  await page.locator('#years').selectOption('2018');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).click();
  await page.getByRole('textbox', { name: 'First name *' }).fill('polk');
  await page.getByRole('textbox', { name: 'Last name *' }).click();
  await page.getByRole('textbox', { name: 'Last name *' }).fill('polnana');
  await page.getByRole('textbox', { name: 'Company', exact: true }).click();
  await page.getByRole('textbox', { name: 'Company', exact: true }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('NANA PVT LTD');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('ADDRESS11');
  await page.getByRole('textbox', { name: 'Address 2' }).click();
  await page.getByRole('textbox', { name: 'Address 2' }).fill('ADDRESS22');
  await page.getByLabel('Country *').selectOption('Australia');
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('MAHA');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('MUM');
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('112211');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('5432167890');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByText('Congratulations! Your new').click();
  await page.getByText('You can now take advantage of').click();
  await page.getByRole('link', { name: 'Continue' }).click();






 });

   