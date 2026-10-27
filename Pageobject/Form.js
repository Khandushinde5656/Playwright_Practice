const { expect } = require("@playwright/test");

class Form {


    constructor(page) {
        this.page = page;
        this.NewPassword = page.getByRole('textbox', { name: 'Password *' });
        this.birthDate = page.locator('#day');
        this.birthYear = page.locator('#year');
        this.checkBox1 = page.getByRole('checkbox', { name: 'GET NOTIFY!' });
        this.firstName = page.getByRole('textbox', { name: 'First name' });
        this.lastName = page.getByRole('textbox', { name: 'Last name' });
        this.addrress = page.getByRole('textbox', { name: 'Address' });
        this.state = page.getByRole('textbox', { name: 'State' });
        this.mobNumber = page.getByRole('textbox', { name: 'Mobile Number' });
        this.createAccount = page.getByRole('button', { name: 'Create Account' });
        this.successmsg = page.locator ("//*[contains( text(),'Congratulations!')]");


    }

    async goTo() {
        await this.page.goto("https://https://rahulshettyacademy.com/loginpagePractise/.com/");
    }

    async accountCreation(Newpassword, day, year, firstname, lastname, address1, state, city, mobilenumber, EndMsg) {
       
        await this.NewPassword.fill(Newpassword);
        await this.birthDate.selectOption(day);
        await this.birthYear.selectOption(year);
        await this.checkBox1.check();
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.addrress.fill(address1);
        await this.state.fill(state);
        await this.city.fill(city);
        await this.mobNumber.fill(mobilenumber);
        await this.createAccount.click();
        await expect (this.successmsg).toHaveText(EndMsg);

    }




}

module.exports = Form;