import { test, expect } from '@playwright/test';

test ("Open facebook.com and fill the form", async({page})=>{

    await page.goto("https://facebook.com")

    await page.waitForTimeout(3000)

   await page.locator("(//span[text()='Allow all cookies'])[2]").click();

   await page.locator("a[data-testid='open-registration-form-button']").click();

   await page.locator("(//input[@name='firstname'])").fill("Anish")

   await page.locator("input[name='firstname']").fill('Anish');
   
   await page.locator("input[name='lastname']").fill('Philip');

   //?await page.locator("//*[@id='u_0_h_xY']").fill('test@gmail.com')

   await page.locator("//input[@name='reg_email__']").fill('test@gmail.com');

   await page.locator("(//span[text()='Allow all cookies'])[2]").click();

   await page.locator("//input[@name='reg_passwd__']").fill('Pass1234#');

   //await page.locator("//button[@name='websubmit']").click();
   
   //await page.locator("//a[@aria-label='Already have an account?']").click();

   //a[@aria-label="Already have an account?"]
   //await page.locator("#email").fill("Abc@gmail.com")

  //  await page.locator("//div[text()='Allow all cookies']").click()
//    await page.getByText("Mail").click

//<span[class='x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft']
    await page.pause()

})
