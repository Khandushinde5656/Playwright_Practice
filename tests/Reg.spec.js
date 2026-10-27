import {test, expect } from '@playwright/test';


test('register', async ({page})=>

{
await page.goto("https://parabank.parasoft.com/parabank/index.htm;jsessionid=7706CF431C59ADF7193C292B5E90F97C");


await page.getByRole('link', {name: 'Register'}).click();

await page.locator('#customerForm').getByRole('First Name:').fill('Ganesh');

await page.locator('#rigihtPanel').filter({hastext:'Signing up is easy!'}).getByPlaceholder('Address:').fill('Mumbaii');
await page.locator('#customerForm').filter({hastext:'Signing up is easy!'}).getByPlaceholder('City:').fill('thane');
await page.locator('#customerForm').filter({hastext:'Signing up is easy!'}).getByPlaceholder('State:').fill('Maharashtra');
await page.locator('#customerForm').filter({hastext:'Signing up is easy!'}).getByPlaceholder('Zip code:').fill('Patil');;
await page.locator('#customerForm').filter({hastext:'Signing up is easy!'}).getByPlaceholder('Phone #:').fill('7894567892');
await page.locator('#customerForm').filter({hastext:'Signing up is easy!'}).getByPlaceholder('SSN:').fill('54654654');
await page.locator('#customerForm').filter({hastext:'Signing up is easy!'}).getByPlaceholder('Username:').fill('GANAP');
await page.locator('#customerForm').filter({hastext:'Signing up is easy!'}).getByPlaceholder('Password:').fill('PatilG');
   await page.locator('#customerForm').filter({hastext:'Signing up is easy!'}).getByPlaceholder('Confirm:').fill('PatilG');;
   await page.getByRole('button', {name: 'REGISTER'});



// await page.getByRole('textbox', {name: 'First Name:'}).fill('Ganesh');
// await page.getByRole('textbox', {name: 'Last Name:'}).fill('Patil');
// await page.getByRole('textbox', {name: 'Address:'}).fill('Latur');
// await page.getByRole('textbox', {name: 'City:'}).fill('Pune');
// await page.getByRole('textbox', {name: 'State:'}).fill('Maharashtra');
// await page.getByRole('textbox', {name: 'Zip code:'}).fill('411041');
// await page.getByRole('textbox', {name: 'Phone #:'}).fill(9966338855);
// await page.getByRole('textbox', {name: 'Zip code:'}).fill('411041');

// await page.getByRole('textbox', {name: 'SSN:'}).fill('1234');

// await page.getByRole('textbox', {name: 'Username:'}).fill('Ganesh123');
// await page.getByRole('textbox', {name: 'Password:'}).fill('Ganaa123');
// await page.getByRole('textbox', {name: 'Confirm:'}).fill('Ganaa123');
// await page.getByRole('button', {name: 'REGISTER'});











test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.getByRole('link', { name: 'Register' }).click();  
  await page.locator('[id=" mcustomer.firstName"]').fill('Narayan');
  await page.locator('[id="customer.lastName"]').click();
  await page.locator('[id="customer.lastName"]').fill('Shinde');
  await page.locator('[id="customer.address.street"]').click();
  await page.locator('[id="customer.address.street"]').fill('mumbai');
  await page.locator('[id="customer.address.city"]').click();
  await page.locator('[id="customer.address.city"]').fill('asfasf');
  await page.locator('[id="customer.address.state"]').click();
  await page.locator('[id="customer.address.state"]').fill('dsvsdds');
  await page.locator('[id="customer.address.zipCode"]').click();
  await page.locator('[id="customer.address.zipCode"]').fill('1111');
  await page.locator('[id="customer.phoneNumber"]').click();
  await page.locator('[id="customer.phoneNumber"]').fill('');
  await page.locator('[id="customer.phoneNumber"]').click();
  await page.locator('[id="customer.phoneNumber"]').fill('999889988');
  await page.locator('[id="customer.ssn"]').fill('565656');
  await page.locator('[id="customer.username"]').click();
  await page.locator('[id="customer.username"]').fill('ndhdfdfndfb');
  await page.locator('[id="customer.password"]').click();
  await page.locator('[id="customer.password"]').fill('12345');
  await page.locator('#repeatedPassword').fill('12345');
  await page.getByRole('button', { name: 'Register' }).click();
});





});