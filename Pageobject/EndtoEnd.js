    class EndtoEnd {

    constructor (page)  
    {
        this.page = page;
        this.Login = page.getByRole('button' , {name: 'Login'});


    }


      async goTo()
          {
                   await this.page.goto("https://rahulshettyacademy.com/AutomationPractice/");
           }


 async eLogin()
{
 await this.Login.click();
}

}
module.exports = EndtoEnd;







