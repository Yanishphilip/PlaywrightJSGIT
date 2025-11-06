import { test, expect } from '@playwright/test';


test("Open https://demo.guru99.com/test/delete_customer.php and simpleAlert",async({browser})=>{

   const page =  await browser.newPage()

await page.goto("https://demo.guru99.com/test/delete_customer.php")

await page.locator("//input[@name='cusid']").fill("123456")


await page.on('dialog', async dialog => {

    await page.waitForTimeout(3000)

    console.log(dialog.type())

    console.log(dialog.message())


   // expect (dialog.message()).toContain("Do you really want to delete this Customer?")

    await dialog.accept()

    
})

   


await page.locator("//input[@name='submit']").click()




})