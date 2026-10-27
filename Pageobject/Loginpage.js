class Loginpage{

constructor(page) 

{
    this.page = page;
    this.signin = page.getByRole('button', { name: 'Signin' });
    this.signUpbutton = page.getByRole('button', {name: 'Signup'});
    this.UserName = page.getByRole('textbox',{name: 'Name'});
    this.email = page.locator('form').filter({hasText: 'Signup'}).getByPlaceholder('Email Address');
   


}

async goTo()

{
    await   this.page.goto("https://https://rahulshettyacademy.com/loginpagePractise/.com/");
 }



    async validLogin(Username, EmailId)
{

  await this.signUp.click();
  await this.UserName.fill(Username);
  await this.email.fill(EmailId);
  await this.signUpbutton.click();


}



}

module.exports = Loginpage;