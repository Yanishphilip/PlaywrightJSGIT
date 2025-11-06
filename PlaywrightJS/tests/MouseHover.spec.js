import { test, expect } from '@playwright/test';

test ("Open https://www.amazon.co.uk/ and use hoover button", async({page})=>{

    await page.goto("https://www.amazon.co.uk/")

    await page.locator("//input[@value='Accept']").click()

   await page.locator("//span[text()='Hello, sign in']").hover()

   await page.locator("//span[text()='Your Account']").click()

   a//wait page.



    await page.pause()

})

