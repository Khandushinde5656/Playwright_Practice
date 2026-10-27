// const {test , expect} = require('@playwright/test');
// const {Loginpage} = require('../Pageobject/Loginpage');
import { test, expect } from '@playwright/test';
import Loginpage from '../Pageobject/Loginpage';
import Form from '../Pageobject/Form';
const dataset = JSON.parse(JSON.stringify(require('../TestData/Credentials.json')));
const dataset2 = JSON.parse(JSON.stringify(require('../TestData/EndtoEnd.json')));








test('Customeronboard flow', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const loginpage = new Loginpage(page);
  await loginpage.goTo();
  await loginpage.validLogin(dataset.name, dataset.emailId);
  const newform = new Form(page);
  await newform.accountCreation(dataset2.password, dataset2.day, dataset2.month, dataset2.year, dataset2.firstname, dataset2.lastname, dataset2.company, dataset2.address1, dataset2.address2, dataset2.city, dataset2.state, dataset2.zipcode, dataset2.mobilenumber, dataset2.EndMsg);
 
});