const { test, expect } = require('@playwright/test');
const { text } = require('node:stream/consumers');


test('browsercontext playwright test', async ({ browser }) => {

    const context = await browser.newContext();// will create new instance/session of chrome
    const page = await context.newPage(); // it will initialize new page

    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //css

    await userName.fill("rahulshettyacademyy");
    await page.locator("[type= 'password']").fill("Learning@830$3mK2");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent()); //playwright will wait for this element till it shows up & text context will extract the text present on element.   

    //Assersion
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    // will wipe the previous filled data in textbox F
    await userName.fill(""); // this wil wipe the data
    await userName.fill('rahulshettyacademy');
    await signIn.click();
    console.log(await cardTitles.first().textContent()); //-> it will print/get the 1st elemenmt from the page
    console.log(await cardTitles.nth(1).textContent()); //-> it will print/get the 2nd elemenmt from the page
    const allTitles = await cardTitles.allTextContents(); // it will grab all the titles that the locatore is giving
    console.log(allTitles);
});

test('UI Controls', async ({ page }) => {

    //const context = await browser.newContext();// will create new instance/session of chrome
    // const page = await context.newPage(); // it will initialize new page

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const documentLink = page.locator("[href*= 'documents-request']"); // blibkig link on the page
    const dropDown = page.locator('select.form-control'); // static dropdown
    await dropDown.selectOption('consult');
    // await page.pause(); // it will pause the test and will open the playwright inspector screen

    await page.locator('.radiotextsty').last().click();//To select radio button 
    await page.locator('#okayBtn').click(); //it is web based pop up as it has ID available
    // assersion
    console.log(await page.locator('.radiotextsty').last().isChecked());
    await expect(page.locator('.radiotextsty').last()).toBeChecked();
    //click on check box
    await page.locator('#terms').click();

    await expect (documentLink).toHaveAttribute("class","blinkingText");
    
});

test('childwindow handling', async ({ browser }) => {

    const context = await browser.newContext();// will create new instance/session of chrome
    const page = await context.newPage(); // it will initialize new page
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*= 'documents-request']");
    

  const [newPage] = await Promise.all(    // it will execute below two lines of code in parallel & for that we wrap that code as arry by using [,,] this operator
     
    [context.waitForEvent('page'),// it will wait to open new page 
     documentLink.click(),
    ])

    const text = await newPage.locator('.red').textContent(); 
    console.log(text);


});
